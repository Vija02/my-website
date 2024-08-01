import HomeHero from "./Hero"
// import HomePitch from "./Pitch"
// import HomeContact from "./Contact"
import HomeRecall from "./Recall"
import HomeDbSchemaLibrary from "./DbSchemaLibrary"
import HomeAboveAndBeyond from "./AboveAndBeyond"
import HomeTestimonial from "./Testimonial"
import HireMe from "components/HireMe"

export default () => {
  return (
    <>
      <HomeHero />
      <HomeAboveAndBeyond />
      <HomeTestimonial />
      <HomeDbSchemaLibrary />
      <HomeRecall />
      {/* <HomePitch /> */}
      {/* <HomeContact /> */}
      <HireMe />
    </>
  )
}
