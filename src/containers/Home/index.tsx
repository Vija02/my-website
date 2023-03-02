import HomeHero from "./Hero"
import HomePitch from "./Pitch"
import HomeProcess from "./Process"
import HomeContact from "./Contact"
import HomeRecall from "./Recall"
import HomeDbSchemaLibrary from "./DbSchemaLibrary"

export default () => {
  return (
    <>
      <HomeHero />
      <HomeDbSchemaLibrary />
      <HomeRecall />
      <HomePitch />
      <HomeProcess />
      <HomeContact />
    </>
  )
}
