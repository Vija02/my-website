import { useRouter } from 'next/router'

import Meta from 'containers/Meta'

import ContactMe from 'containers/ContactMe'

function ContactMeIndex() {
  const router = useRouter()

  return (
    <>
      <Meta title="Contact Me" />
      <ContactMe subject={router.query?.about?.toString() ?? ""} />
    </>
  )
}

export default ContactMeIndex