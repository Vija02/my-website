import Head from "next/head"

type PropTypes = {
  title?: string
  description?: string
  bannerUrl?: string
}

export default ({
  title,
  description = "Get your projects a reality with a few steps. Michael Salim is a Senior Full Stack Freelancer and the creator of the Recall project management software.",
  bannerUrl = "https://michaelsalim.co.uk/assets/img/social_banner.jpg",
}: PropTypes) => {
  const finalTitle = !!title
    ? `${title} - Michael Salim | Senior Full Stack Freelancer and Startup Founder`
    : "Michael Salim | Senior Full Stack Freelancer and Startup Founder"

  return (
    <Head>
      <title>{finalTitle}</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={description} />
      <meta name="author" content="Michael Salim" />
      <meta property="og:image" content={bannerUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@IamMichaelSalim" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={bannerUrl} />
    </Head>
  )
}
