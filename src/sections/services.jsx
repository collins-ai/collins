import Heading from "../components/heading"
import Features from "../components/features"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { minorHeading, majorHeading, subHeading, services, features } from "../constants/servicesConstant"

const Services = () => {
  useGSAP(() => {
    gsap.timeline({scrollTrigger: {
      trigger: `.service`,
      start: `top 20%`,
      end: `bottom 80%`,
      scrub: 10
    }})
    .from(
      `.service`,
      {yPercent: -100, opacity: 0, stagger: .1, ease: `power1.out`}
    )
  })

  return (
    <section id="services" className="bg-neutral-100 text-black px-4 py-20 text-lg flex flex-col gap-30">
      <Heading minor={minorHeading} major={majorHeading} sub={subHeading} />
      <div className="flex flex-col gap-30">
        <div className="flex flex-col gap-y-15 px-4 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-y-10 sm:px-10 lg:flex-nowrap lg:gap-5 lg:px-15">
          {services.map((service, index) => (
            <div key={index} className="service bg-white text-black shadow-2xl rounded-xl p-4 flex flex-col gap-5 items-start group hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-600 sm:basis-[48%] lg:basis-auto">
              <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white text-2xl p-2 rounded-lg group-hover:text-black group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white">
                {service.icon}
              </div>
              <h3 className="font-bold">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <Features features={features} />
      </div>
    </section>
  )
}

export default Services
