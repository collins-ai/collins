import spaceTourism from "../assets/images/spaceTourism.png"
import bookmarkLandingPage from "../assets/images/bookmarkLandingPage.png"
import loopstudiosLandingPage from "../assets/images/loopstudiosLandingPage.png"
import eCommercePage from "../assets/images/eCommercePage.png"
import newsletterForm from "../assets/images/newsletterForm.png"
import roomHomepage from "../assets/images/roomHomepage.png"
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
  },
  {
    title: `E-commerce page`, image: eCommercePage, link: `https://collins-ai.github.io/E-commerce-page/`,
    description: `I focus on building mobile responsive and interactive websites for founders and business owners.`
  },
  {
    title: `Newsletter form`, image: newsletterForm, link: `https://collins-ai.github.io/newsletter-form/`,
    description: `I focus on building mobile responsive and interactive websites for founders and business owners.`
  },
  {
    title: `Room homepage`, image: roomHomepage, link: `https://collins-ai.github.io/room-homepage/`,
    description: `I focus on building mobile responsive and interactive websites for founders and business owners.`
  }
]

export { minorHeading, majorHeading, subHeading, projects, features }
