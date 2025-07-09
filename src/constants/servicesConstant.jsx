import { GiDeliveryDrone, GiStaticGuard } from "react-icons/gi"
import { SiCssdesignawards } from "react-icons/si"
import { FaUserCheck } from "react-icons/fa"
import { MdDynamicForm, MdOutlinePreview } from "react-icons/md"
import { TbWorldSearch } from "react-icons/tb"

const minorHeading = `What I do`
const majorHeading = `The services I offer`
const subHeading = `Offering clean, responsive, and modern web development services that turn your vision into a significant online experience.`

const features = [
  {icon: <FaUserCheck />, description: `Client satisfaction`},
  {icon: <TbWorldSearch />, description: `SEO friendly`},
  {icon: <MdOutlinePreview />, description: `Job review`},
  {icon: <GiDeliveryDrone />, description: `On time delivery`}
]

const services = [
  {
    title: `Static HTML & CSS websites`, icon: <GiStaticGuard />,
    description: `I create clean, responsive websites using just HTML and CSS — perfect for portfolios, personal blogs, resumes, or simple business pages. These sites are lightweight, fast, and easy to maintain.`
  },
  {
    title: `Figma to Code (HTML/CSS or React/Tailwind)`, icon: <SiCssdesignawards />,
    description: `Have a design ready in Figma? I convert your mockups into high-quality, responsive code that matches the design pixel-for-pixel. You can choose plain HTML/CSS or a React + Tailwind setup.`
  },
  {
    title: `Modern React & Tailwind websites`, icon: <MdDynamicForm />,
    description: `Need a dynamic and scalable website with modern UI/UX? I build fast, modular, and interactive web apps using React.js and Tailwind CSS. Ideal for dashboards, portfolios, startups, or business websites that need performance and flexibility.`
  }
]

export { minorHeading, majorHeading, subHeading, services, features }


// You’ll get:
// Up to 5 fully responsive pages (Home, About, Contact, etc.)
// Mobile-first design
// Contact form (optional)
// Basic animations and hover effects
// Delivery within 3–7 days (based on complexity)


// You’ll get:
// Pixel-perfect implementation
// Mobile responsiveness
// Organized code with clear structure
// Components matching Figma styles
// Delivery within 3–7 days (based on complexity)


// You’ll get:
// Up to 6 pages/components (expandable)
// Reusable and clean React components
// Tailwind CSS for utility-first, responsive design
// Form handling and interactivity
// Smooth animations and transitions
// Integration with APIs (REST or Firebase)
// SEO-friendly structure and responsive layout
// Delivery within 3–7 days (based on complexity)


// 1. Custom Website Development
// I build modern, responsive, and user-friendly websites from scratch using HTML, CSS, JavaScript, and modern frameworks like React. Whether it’s a personal blog, business site, or portfolio — I’ll bring your ideas to life with clean, scalable code.

// 2. Frontend UI/UX Development
// Great design needs solid implementation. I turn Figma, Adobe XD, or Sketch designs into pixel-perfect, fully interactive web interfaces that work seamlessly across all devices and browsers.
