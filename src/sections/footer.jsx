import { footerIcons, text } from '../constants/footerConstant'

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 py-10 text-lg flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
      <p className="text-center">{text}</p>
      <div className="flex gap-10">
        {footerIcons.map((footerIcon, index) => (
          <a key={index} href={footerIcon.url} target="_blank" className="bg-neutral-800 text-2xl p-2 rounded-lg cursor-pointer hover:bg-white hover:text-neutral-800">{footerIcon.icon}</a>
        ))}
      </div>
    </footer>
  )
}

export default Footer
