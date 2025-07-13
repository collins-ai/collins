import { Link } from "react-scroll"
import { useRef, useState } from "react"
import { IoIosMenu, IoMdClose } from "react-icons/io"
import DesktopNavbar from "../components/desktopNavbar"
import MobileNavbar from "../components/mobileNavbar"

const Header = () => {
  const navRef = useRef()
  const [menuIcon, setMenuIcon] = useState(true)

  const toggleNavbar = () => {
    setMenuIcon(!menuIcon)
    navRef.current.classList.toggle(`translate-y-[100vh]`)
    document.body.classList.toggle(`overflow-hidden`)
  }

  return (
    <header className="bg-neutral-800 text-white p-4 text-lg sticky top-0 flex justify-between items-center z-20">
      <Link to="hero" offset={-50} tabIndex={0} className="text-xl font-bold cursor-pointer">Sunday Collins</Link>
      <MobileNavbar navbarRef={navRef} closeNavbar={toggleNavbar}  />
      <DesktopNavbar />
      <button onClick={toggleNavbar} className="border border-white text-4xl rounded-lg lg:hidden">
        {menuIcon ? <IoIosMenu /> : <IoMdClose />}
      </button>
      <Link to="contact" offset={-50} tabIndex={0} className="hidden bg-white text-black font-semibold p-2 rounded-lg cursor-pointer hover:bg-black hover:text-white lg:block">Contact me</Link>
    </header>
  )
}

export default Header
