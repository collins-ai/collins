import { navigationLinks } from "../constants/headerConstant"

const DesktopNavbar = () => {
  return (
    <nav>
      <ul className="hidden gap-10 lg:flex">
        {navigationLinks.map((navigationLink, index) => (
          <li key={index}><a href={navigationLink.path} className="p-2 hover:border-b hover:border-b-white">{navigationLink.title}</a></li>
        ))}
      </ul>
    </nav>
  )
}

export default DesktopNavbar
