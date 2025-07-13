import Footer from "./sections/footer"
import Header from "./sections/header"
import Main from "./sections/main"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)


function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
