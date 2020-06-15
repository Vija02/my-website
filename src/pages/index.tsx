import Head from 'next/head'
import dynamic from 'next/dynamic'

import Meta from 'containers/Meta'
import HomeHero from 'containers/Home/Hero'
import HomeProcess from 'containers/Home/Process'
import HomeFooter from 'containers/Home/Footer'

const HomeSkills = dynamic(
  () => import('containers/Home/Skills'),
  { ssr: false }
)
const HomeContact = dynamic(() => import('containers/Home/Contact'))

function HomeIndex() {
  return (
    <>
      <Meta title="Home" />
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400;700&display=swap" rel="stylesheet" />
      </Head>
      <div>
        <HomeHero />
        <HomeProcess />
        <HomeSkills />
        <HomeContact />
        <HomeFooter />
      </div>
    </>
  )
}

export default HomeIndex