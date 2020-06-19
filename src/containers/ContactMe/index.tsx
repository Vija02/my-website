import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { toast } from 'react-toastify'

import StandardHeader from 'components/StandardHeader'
import Footer from 'components/Footer'

import sendContactMe from './contact'

import styles from './index.module.css'

type PropTypes = {
  subject: string
}

export default ({ subject: originalSubject }: PropTypes) => {
  const [subject, setSubject] = useState(originalSubject)
  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [message, setMessage] = useState("")

  return (
    <>
      <StandardHeader />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>CONTACT ME</h1>
        </div>
        <p className={styles.subheader}>Send me an email at <DeferedEmail /><br />Alternatively, fill the form below. I will get back to you as soon as possible!</p>
        <form onSubmit={(e) => {
          e.preventDefault()

          if (message === "") {
            toast.error("Please write a message.")
            return
          }

          sendContactMe({ subject, contact, message, name }).then(() => {
            setMessage("")
            toast.success("Thank you for contacting me. I will get back to you as soon as possible.")
          }).catch(() => {
            toast.error("Sorry, the message wasn't sent properly. Please send me an email instead.")
          })
        }}>
          <label htmlFor="about">About:</label>
          <input
            type="text"
            placeholder="What do you want to talk about?"
            value={subject}
            onChange={e => setSubject(e.target.value)}
          />
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Name (Optional)"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <label htmlFor="contact">Contact:</label>
          <input
            type="text"
            placeholder="How can I cantact you back? (Email, Phone No., Etc.)"
            value={contact}
            onChange={e => setContact(e.target.value)}
          />
          <label htmlFor="body">Body:</label>
          <textarea
            rows={10}
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  )
}

// This is to make it harder to be scraped :)
const Email = () => {
  const mail = "contact" + "@" + "michael" + "salim" + ".co.uk"
  const mailto = "ma" + "ilto:" + mail
  return (
    <a href={mailto} className={styles.mailLink}>{mail}</a>
  )
}

const DeferedEmail = dynamic(
  () => Promise.resolve(Email),
  { ssr: false }
)