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

## Prerequisites

- Node.js (v18 or higher recommended)
- A [Slack App](https://api.slack.com/apps) with the following:
    - **Slash Commands** enabled (`/rewrite`)
    - **Interactivity** enabled
  - **Bot Token Scopes:**
    - `commands`: Enable the slash command.
- An OpenAI API Key

## Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url> cd rewrite
```
### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Copy the template file and fill in your credentials:
```bash
cp .env.template .env
```

Edit `.env`:
- `SLACK_BOT_TOKEN`: Your "xoxb-" Bot User OAuth Token.
- `SLACK_SIGNING_SECRET`: Found in your Slack App Basic Information.
- `OPENAI_API_KEY`: Your OpenAI Secret Key.
- `PORT`: Default is 3000.

### 4. Run the application
```bash
npm start
```

## Usage

In any Slack channel where the app is installed, type:

`/rewrite can we meet at 5 instead of 4 because i am busy`

1. A **private modal** will open containing a professional suggestion (e.g., *"Could we reschedule our 4:00 PM meeting to 5:00 PM?"*).
2. **Review or Edit** the text inside the text box if you want to make changes.
3. Click **Post** to send it to the channel. It will appear as if you sent it.

## License

This project is licensed under the ISC License.