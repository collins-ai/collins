import { Link } from "react-scroll"
import { navigationLinks } from "../constants/headerConstant"

const DesktopNavbar = () => {
  return (
    <nav>
      <ul className="hidden gap-10 lg:flex">
        {navigationLinks.map((navigationLink, index) => (
          <li key={index}>
            <Link to={navigationLink.path} offset={-50} tabIndex={0} className="p-2 cursor-pointer hover:border-b hover:border-b-white">{navigationLink.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default DesktopNavbar
