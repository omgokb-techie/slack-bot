// index.js
import fetch from "node-fetch";

const webhookUrl = process.env.SLACK_WEBHOOK_URL;

async function sendMessage() {
  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: "👋 Daily reminder: Daily Report at 11:10 PM"
    })
  });

  console.log("Message sent");
}

sendMessage();