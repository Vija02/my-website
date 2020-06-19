import { AppProps } from 'next/app'
import Router from "next/router"
import NProgress from "nprogress"
import { ToastContainer, toast } from 'react-toastify'

import 'normalize.css'
import "nprogress/nprogress.css"
import 'containers/index.css'
import 'react-toastify/dist/ReactToastify.css'

NProgress.configure({
  showSpinner: false,
})

if (typeof window !== "undefined") {
  Router.events.on("routeChangeStart", () => {
    NProgress.start()
  })

  Router.events.on("routeChangeComplete", () => {
    NProgress.done()
  })
  Router.events.on("routeChangeError", (err: Error | string) => {
    NProgress.done()
    // @ts-ignore
    if (err["cancelled"]) {
      // No need to do anything
    } else {
      toast.error("Sorry, the page failed to load. Please try again.")
    }
  })
}


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  )
}