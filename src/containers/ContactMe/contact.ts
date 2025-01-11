const webhookUrl = "https://discord.com/api/webhooks/1327785028943351840/5B5O6syq5TSfNCpDgjOFbrkv-bSs9kW-_iTFfh2pQ0pvzjnJfT3zpDX0Q8u9ALj0kcQN"

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
