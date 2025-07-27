import spaceTourism from "../assets/images/spaceTourism.png"
import bookmarkLandingPage from "../assets/images/bookmarkLandingPage.png"
import loopstudiosLandingPage from "../assets/images/loopstudiosLandingPage.png"
import edusity from "../assets/images/edusity.png"
import foodie from "../assets/images/foodie.png"
import virtualR from "../assets/images/virtualR.png"
import { MdAnimation } from "react-icons/md"
import { FaUsersGear } from "react-icons/fa6"
import { TbDeviceDesktopCode, TbDeviceMobileCheck } from "react-icons/tb"

const minorHeading = `Samples i've built`
const majorHeading = `A few completed Projects`
const subHeading = `Here's a collection of a few projects built with clean code and responsive design. From simple static pages to fully functional websites.`

const features = [
  {icon: <FaUsersGear />, description: `User friendly`},
  {icon: <TbDeviceDesktopCode />, description: `Clean code`},
  {icon: <TbDeviceMobileCheck />, description: `Mobile first`},
  {icon: <MdAnimation />, description: `Gsap animations`}
]

const projects = [
  {
    title: `virtualR`, image: virtualR, link: `https://virtual-r-khaki-nine.vercel.app/`,
    description: `I focus on building mobile responsive and interactive websites for founders and business owners.`
  },
  {
    title: `foodie`, image: foodie, link: `https://foodie-three-swart.vercel.app/`,
    description: `I focus on building mobile responsive and interactive websites for founders and business owners.`
  },
  {
    title: `edusity`, image: edusity, link: `https://edusity-virid.vercel.app/`,
    description: `I focus on building mobile responsive and interactive websites for founders and business owners.`
  },
  {
    title: `Space tourism`, image: spaceTourism, link: `https://collins-ai.github.io/space-tourism/`,
    description: `I focus on building mobile responsive and interactive websites for founders and business owners.`
  },
  {
    title: `Bookmark landing page`, image: bookmarkLandingPage, link: `https://collins-ai.github.io/bookmark-landing-page/`,
    description: `I focus on building mobile responsive and interactive websites for founders and business owners.`
  },
  {
    title: `Loopstudios landing page`, image: loopstudiosLandingPage, link: `https://collins-ai.github.io/loopstudios-landing-page/`,
    description: `I focus on building mobile responsive and interactive websites for founders and business owners.`
  }
]

export { minorHeading, majorHeading, subHeading, projects, features }
