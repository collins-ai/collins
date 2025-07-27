import { FaGithubSquare, FaLinkedin } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"

const text = `Copyright ©${new Date().getFullYear()} Sunday Collins - frontend web developer. All rights reserved.`

const footerIcons = [
  {icon: <FaSquareXTwitter />, url: `https://x.com/sundaycollins84`},
  {icon: <FaLinkedin />, url: `https://www.linkedin.com/in/collins-sunday`},
  {icon: <FaGithubSquare />, url: `https://github.com/collins-ai`}
]

export { footerIcons, text }
