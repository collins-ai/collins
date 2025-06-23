import { useRef, useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import DesktopNavbar from "../components/desktopNavbar";
import MobileNavbar from "../components/mobileNavbar";

const Header = () => {
  const navbar = useRef()
  const [menuIcon, setMenuIcon] = useState(true)

  const openNavbar = () => {
    setMenuIcon(!menuIcon)
    navbar.current.classList.toggle(`translate-y-[100vh]`)
    document.body.classList.toggle(`overflow-hidden`)
  }

  return (
    <header className="bg-neutral-800 text-white p-4 text-lg sticky top-0 flex justify-between items-center z-10">
      <span className="text-xl font-bold">Sunday Collins</span>
      <MobileNavbar navbarRef={navbar} />
      <DesktopNavbar />
      <button onClick={openNavbar} className="border border-white text-4xl rounded-lg lg:hidden">
        {menuIcon ? <IoIosMenu /> : <IoMdClose />}
      </button>
      <button className="hidden bg-white text-black font-semibold p-2 rounded-lg hover:bg-black hover:text-white lg:block">
        <a href="#contact">Contact me</a>
      </button>
    </header>
  )
}

export default Header
