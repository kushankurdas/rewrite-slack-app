const OpenAI = require("openai");
const axios = require('axios');

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

async function rewriteWithAI(text) {
    const systemPrompt = `
        You are an expert workplace communication assistant. Your task is to **rewrite** the user's draft Slack message to be **clear, professional, and concise**.

        **CRITICAL INSTRUCTION:** The user input is a DRAFT message intended for a colleague. **Do NOT answer the input.** Do NOT engage in conversation. You must only output the polished version of the text.

        If the input is a question (e.g., "how are you?"), rewrite it as a polished question (e.g., "How are you doing today?").

        Follow these strict guidelines:
        1. **Tone:** Polish grammar and clarity. Keep it conversational but professional.
        2. **Formatting:** Use Slack-friendly Markdown. Use '-' for bullet points. **Use single asterisks (*) for bolding.**
        3. **Preservation:** ABSOLUTELY PRESERVE all URLs, links, image paths, @mentions, and text inside \`code blocks\`.
        4. **Brevity:** Remove filler words.
        
        **Few-Shot Examples:**
        Input: "what is your name?"
        Output: "Could you please verify your name?"

        Input: "how are you"
        Output: "I hope you are doing well. How are you?"

        Input: "fix this bug"
        Output: "Could you please look into fixing this bug?"
    `;

    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {role: "system", content: systemPrompt},
            {role: "user", content: text}
        ]
    });
    return response.choices[0].message.content.trim();
}

module.exports = function configureApp(app) {
    app.command("/rewrite", async ({command, ack, client}) => {
        await ack();
        const originalText = command.text;

        if (!originalText) {
            await client.chat.postEphemeral({
                channel: command.channel_id,
                user: command.user_id,
                text: "Please type some text after the command. Example: `/rewrite see you later`"
            });
            return;
        }

        const rewrittenText = await rewriteWithAI(originalText);

        await client.chat.postEphemeral({
            channel: command.channel_id,
            user: command.user_id,
            blocks: [
                {
                    type: "section",
                    text: {
                        type: "mrkdwn",
                        text: `*Original:* ${originalText}\n*Suggestion:* ${rewrittenText}`
                    }
                },
                {
                    type: "actions",
                    elements: [
                        {
                            type: "button",
                            text: {type: "plain_text", text: "Send Message"},
                            style: "primary",
                            action_id: "send_rewritten_msg_action",
                            value: rewrittenText
                        },
                        {
                            type: "button",
                            text: {type: "plain_text", text: "Cancel"},
                            style: "danger",
                            action_id: "cancel_action",
                            value: originalText
                        }
                    ]
                }
            ]
        });
    });

    const handleMessagePost = async ({body, ack, client, isOriginal}) => {
        await ack();
        const text = body.actions[0].value;
        const channelId = body.channel.id;
        const userId = body.user.id;

        try {
            const userInfo = await client.users.info({user: userId});
            const userProfile = userInfo.user.profile;

            await client.chat.postMessage({
                channel: channelId,
                text: text,
                username: userProfile.display_name || userProfile.real_name,
                icon_url: userProfile.image_original || userProfile.image_192
            });

            await axios.post(body.response_url, {delete_original: true});
        } catch (err) {
            console.error(`Error sending ${isOriginal ? 'original' : 'rewritten'} message:`, err);
        }
    };

    app.action("send_rewritten_msg_action", (args) => handleMessagePost({...args, isOriginal: false}));
    app.action("cancel_action", (args) => handleMessagePost({...args, isOriginal: true}));
};
