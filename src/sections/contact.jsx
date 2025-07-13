import Heading from "../components/heading"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { useState } from "react"
import { minorHeading, majorHeading, subHeading, desk } from "../constants/contactConstant"

const Contact = () => {
  const [sendMessage, setSendMessage] = useState(`Send Message`)

  const submitForm = async (event) => {
    event.preventDefault()
    setSendMessage(`Sending....`)

    const formData = new FormData(event.target)
    formData.append(`access_key`, `482a5512-25a7-4af3-9912-785806f1d4a2`)

    const response = await fetch(`https://api.web3forms.com/submit`, {
      method: `POST`,
      body: formData
    });

    const data = await response.json()

    if(data.success) {
      setSendMessage(`Successfully Sent`)
      event.target.reset()
    }else {
      console.log(`Error`, data)
      setSendMessage(data.message)
    }
  }

  useGSAP(() => {
    gsap.timeline({scrollTrigger: {
      trigger: `.form`,
      start: `top 80%`,
      end: `bottom bottom`,
      scrub: 5
    }})
    .from(
      `.form`,
      {scale: 0, opacity: 0, ease: `power1.out`}
    )
  })

  return (
    <section id="contact" className="bg-neutral-100 text-black px-4 py-20 text-lg flex flex-col gap-30">
      <Heading minor={minorHeading} major={majorHeading} sub={subHeading} />
      <div className="flex flex-col gap-20 px-5 sm:flex-row sm:items-center sm:justify-center lg:px-20">
        <form onSubmit={submitForm} className="form bg-neutral-800 p-5 rounded-xl flex flex-col gap-5 sm:basis-[50%] lg:basis-[40%]">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-white">Name</label>
            <input type="text" name="name" id="name" placeholder="Your name" className="bg-white p-2 rounded-lg" required />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-white">Email</label>
            <input type="email" name="email" id="email" placeholder="Your email address" className="bg-white p-2 rounded-lg" required />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-white">Message</label>
            <textarea name="message" id="message" rows="3" placeholder="Your message" className="bg-white p-2 rounded-lg" required></textarea>
          </div>
          <input type="submit" value={sendMessage} className="bg-white font-semibold p-2 rounded-lg cursor-pointer hover:bg-black hover:text-white" />
        </form>
        <div className="sm:basis-[50%]">
          <img src={desk} alt="desk" className="rounded-xl mx-auto w-full" />
        </div>
      </div>
    </section>
  )
}

export default Contact
