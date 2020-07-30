import dynamic from 'next/dynamic'

import Meta from 'containers/Meta'

import FullScreenLoading from 'components/FullScreenLoading'
import Footer from 'components/Footer'

const Home = dynamic(
  () => import('containers/Home'),
  {
    ssr: false, loading: () => (
      <FullScreenLoading />
    )
  }
)

function HomeIndex() {
  return (
    <>
      <Meta title="Home" />
      <div>
        <Home />
      </div>
      <Footer />
    </>
  )
}

export default HomeIndex