import { Link } from "react-scroll"
import { navigationLinks } from "../constants/headerConstant"

const MobileNavbar = ({ navbarRef, closeNavbar }) => {
  return (
    <nav ref={navbarRef} className="bg-black/90 absolute -top-[100vh] left-0 w-full h-screen duration-1000 flex flex-col justify-center items-center gap-10 text-center -z-10 lg:hidden">
      <ul className="flex flex-col gap-10">
        {navigationLinks.map((navigationLink, index) => (
          <li key={index} onClick={closeNavbar}>
            <Link to={navigationLink.path} offset={-50} onClick={closeNavbar} className="p-2 hover:border-b hover:border-b-white">{navigationLink.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="contact" offset={-50} onClick={closeNavbar} className="bg-white text-black font-semibold p-2 rounded-lg hover:bg-neutral-800 hover:text-white">Contact me</Link>
    </nav>
  )
}

export default MobileNavbar
