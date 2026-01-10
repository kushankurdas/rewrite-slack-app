require("dotenv").config();
const {App} = require("@slack/bolt");
const configureApp = require("./core");

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    endpoints: "/slack/events",
    port: process.env.PORT || 3000
});

// Load common logic
configureApp(app);

(async () => {
    await app.start();
    console.log("⚡ Slack AI Slash Command is running (Local)");
})();