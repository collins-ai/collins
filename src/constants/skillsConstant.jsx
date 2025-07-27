import github from "../assets/logos/github.png"
import git from "../assets/logos/git.png"
import gsap from "../assets/logos/gsap.png"
import html from "../assets/logos/html.png"
import css from "../assets/logos/css.png"
import javascript from "../assets/logos/javascript.png"
import react from "../assets/logos/react.png"
import tailwind from "../assets/logos/tailwind.png"

const minorHeading = `My acquired skills`
const majorHeading = `The skills I bring to the table`
const subHeading = `The frontend development languages, frameworks, and libraries I use in building responsive and interactive websites.`

const skills = [
  {title: `React`, link: `https://react.dev/`, logo: react},
  {title: `Tailwind`, link: `https://tailwindcss.com/`, logo: tailwind},
  {title: `HTML`, link: `https://www.w3schools.com/html/default.asp`, logo: html},
  {title: `CSS`, link: `https://www.w3schools.com/css/default.asp`, logo: css},
  {title: `JavaScript`, link: `https://www.w3schools.com/js/`, logo: javascript},
  {title: `Github`, link: `https://github.com/`, logo: github},
  {title: `Git`, link: `https://git-scm.com/`, logo: git},
  {title: `Gsap`, link: `https://gsap.com/`, logo: gsap}
]

export { minorHeading, majorHeading, subHeading, skills }
