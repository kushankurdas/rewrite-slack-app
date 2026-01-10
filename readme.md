# Rewrite AI

A Slack application built with Node.js that uses OpenAI's GPT-4o-mini to help users polish their messages. It provides a `/rewrite` command to turn rough drafts into professional, concise messages before they are sent to the channel.

## Features

- **Slash Command:** Use `/rewrite [your message]` to instantly open a private modal popup.
- **Interactive Editor:** The modal displays the AI-polished suggestion. You can review and **edit the text** directly in the window before sending to ensure it's perfect.
- **Seamless Posting:**
  - **Post:** Click the confirmation button to send the final text to the channel, "impersonating" you with your name and avatar.
  - **Discard:** Simply close the modal to discard the draft without posting.
- **Context Preservation:** Uses GPT-4o-mini to keep your original intent while strictly improving tone and clarity.

## Tech Stack

- [Slack Bolt for JavaScript](https://slack.dev/bolt-js/concepts)
- [OpenAI API](https://platform.openai.com/docs/overview) (GPT-4o-mini)
- Node.js & npm
- Axios for response handling

## Prerequisites

- Node.js (v18 or higher recommended)
- A [Slack App](https://api.slack.com/apps) with the following:
    - **Slash Commands** enabled (`/rewrite`)
    - **Interactivity** enabled
    - **Scopes:** `chat:write`, `commands`, `users:read`
- An OpenAI API Key

## Getting Started

### 1. Clone the repository
```bash
bash git clone <your-repo-url> cd rewrite
```
### 2. Install dependencies
```bash
bash npm install
```

### 3. Configure Environment Variables
Copy the template file and fill in your credentials:
```bash
bash cp .env.template .env
```

Edit `.env`:
- `SLACK_BOT_TOKEN`: Your "xoxb-" Bot User OAuth Token.
- `SLACK_SIGNING_SECRET`: Found in your Slack App Basic Information.
- `OPENAI_API_KEY`: Your OpenAI Secret Key.
- `PORT`: Default is 3000.

### 4. Run the application
```bash
node node.js
```


## Usage

In any Slack channel where the app is installed, type:
`/rewrite can we meet at 5 instead of 4 because i am busy`

1. The app will respond privately with a professional suggestion: *"Could we reschedule our 4:00 PM meeting to 5:00 PM?"*
2. Click **Send Message** to post it publicly as yourself.
3. Click **Cancel** to post your original message instead.

## License

This project is licensed under the ISC License.