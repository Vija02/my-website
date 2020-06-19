const webhookUrl = "https://discordapp.com/api/webhooks/723286957651657179/ms7g7-Xa3jK9R3ntlI7lCQwPoraXnK6bcbDjbYlNzlKrXfuqenTrSAq9OTscsocnHTmb"

type MessageProp = {
  subject: string
  message: string
  contact: string
  name: string
}

export default ({ subject, message, contact, name }: MessageProp) => {
  return fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: "Contact from contact form @michaelsalim.co.uk",
      embeds: [
        {
          title: subject,
          description:
            `*Name*: ${name}
            *Contact through*: ${contact}` +
            '```' + message + '```',
          timestamp: new Date().toISOString(),
          color: 3524959,
        }
      ]
    })
  }).then(res => {
    if (res.status >= 200 && res.status < 300) {
      return Promise.resolve()
    } else {
      throw new Error()
    }
  })
}