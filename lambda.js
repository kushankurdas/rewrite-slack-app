const { App, AwsLambdaReceiver } = require("@slack/bolt");
const AWS = require("aws-sdk");
const { configureApp, processWorkerEvent } = require("./core");

// Initialize AWS SDK
const lambda = new AWS.Lambda();

const awsLambdaReceiver = new AwsLambdaReceiver({
    signingSecret: process.env.SLACK_SIGNING_SECRET,
});

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    receiver: awsLambdaReceiver,
});

configureApp(app, lambda);

module.exports.handler = async (event, context, callback) => {
    // Intercepting "Worker" Events (triggering by ourselves)
    if (event.type === 'rewrite_worker') {
        console.log("Worker waking up...");
        await processWorkerEvent(event.payload, app.client);
        return;
    }

    // Handling Standard Slack Requests
    const handler = await awsLambdaReceiver.start();
    return handler(event, context, callback);
};