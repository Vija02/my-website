import Head from 'next/head'
import { useRouter } from 'next/router'

import Meta from 'containers/Meta'

import ContactMe from 'containers/ContactMe'

function ContactMeIndex() {
  const router = useRouter()

  return (
    <>
      <Meta title="Contact Me" />
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400;700&display=swap" rel="stylesheet" />
      </Head>
      <ContactMe subject={router.query?.about?.toString() ?? ""} />
    </>
  )
}

export default ContactMeIndex