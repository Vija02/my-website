import HomeHero from "./Hero"
import HomePitch from "./Pitch"
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
      <HomeContact />
    </>
  )
}
