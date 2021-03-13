import Meta from 'containers/Meta'
import Home from 'containers/Home'

import Footer from 'components/Footer'

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
