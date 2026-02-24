async function sendWebhook() {
  const webhook = document.getElementById("webhook").value;
  const message = document.getElementById("message").value;
  const embedTitle = document.getElementById("embedTitle").value;
  const embedDesc = document.getElementById("embedDesc").value;
  const embedColor = document.getElementById("embedColor").value;

  const payload = {
    content: message ? message : null,
    embeds: embedTitle ? [{
      title: embedTitle,
      description: embedDesc,
      color: parseInt(embedColor, 16)
    }] : []
  };

  try {
    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    document.getElementById("console").innerText = "Message Sent Successfully.";
  } catch (err) {
    document.getElementById("console").innerText = "Error sending message.";
  }
}
