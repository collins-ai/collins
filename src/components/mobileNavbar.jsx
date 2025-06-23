import { navigationLinks } from "../constants/headerConstant"

const MobileNavbar = ({navbarRef}) => {
  return (
    <nav ref={navbarRef} className="bg-black/95 absolute -top-[100vh] left-0 w-full h-screen duration-1000 flex flex-col justify-center items-center gap-10 text-center -z-10 lg:hidden">
      <ul className="flex flex-col gap-10">
        {navigationLinks.map((navigationLink, index) => (
          <li key={index}><a href={navigationLink.path} className="p-2 hover:border-b hover:border-b-white">{navigationLink.title}</a></li>
        ))}
      </ul>
      <button className="bg-white text-black font-semibold p-2 rounded-lg hover:bg-neutral-800 hover:text-white">
        <a href="#contact">Contact me</a>
      </button>
    </nav>
  )
}

export default MobileNavbar
