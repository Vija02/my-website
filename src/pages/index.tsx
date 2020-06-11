import Head from 'next/head'
import dynamic from 'next/dynamic'

import Meta from 'containers/Meta'
import HomeHero from 'containers/Home/Hero'
import HomeProcess from 'containers/Home/Process'
// import HomeSkills from 'containers/Home/Skills'

const HomeSkills = dynamic(
  () => import('containers/Home/Skills'),
  { ssr: false }
)

function HomeIndex() {
  return (
    <>
      <Meta title="Home" />
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap" rel="stylesheet" />
      </Head>
      <div>
        <HomeHero />
        <HomeProcess />
        <HomeSkills />
      </div>
    </>
  )
}

export default HomeIndex