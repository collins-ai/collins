import Heading from "../components/heading"
import Features from "../components/features"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef, useState } from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6"
import { minorHeading, majorHeading, subHeading, projects, features } from "../constants/projectsConstant"

const Projects = () => {
  const sliderRef = useRef()
  let [initial, setInitial] = useState(0)

  const forward = () => {
    initial > -50 && setInitial(initial -= 15)
    sliderRef.current.style.transform = `translateX(${initial}%)`
  }

  const backward = () => {
    initial < 0 && setInitial(initial += 15)
    sliderRef.current.style.transform = `translateX(${initial}%)`
  }

  useGSAP(() => {
    gsap.timeline({scrollTrigger: {
      trigger: `.project`,
      start: `top 80%`,
      end: `bottom bottom`,
      scrub: 10
    }})
    .from(
      `.project`,
      {xPercent: -100, opacity: 0, scale: 0, stagger: .2, ease: `power1.out`}
    )
  })

  return (
    <section id="projects" className="bg-neutral-100 text-black px-4 py-20 text-lg flex flex-col gap-20">
      <Heading minor={minorHeading} major={majorHeading} sub={subHeading} />
      <div className="flex flex-col gap-20 lg:px-30 lg:relative">
        <FaArrowLeft tabIndex={0} onClick={backward} className="hidden lg:block text-5xl absolute top-1/3 left-0 cursor-pointer hover:text-orange-500" />
        <FaArrowRight tabIndex={0} onClick={forward} className="hidden lg:block text-5xl absolute top-1/3 right-0 cursor-pointer hover:text-orange-500" />
        <div className="overflow-scroll lg:overflow-hidden">
          <div ref={sliderRef} className={`p-10 flex gap-10 w-[460%] duration-1000 sm:w-[260%] lg:w-[230%] lg:gap-20`}>
            {projects.map((project, index) => (
              <div key={index} className="project bg-white shadow-xl p-4 rounded-2xl flex flex-col items-start gap-5">
                <img src={project.image} alt="projects" className="bg-transparent" />
                <h3 className="font-bold">{project.title}</h3>
                <p className="leading-tight">{project.description}</p>
                <a href={project.link} target="_blank" className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-2 py-1 rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-black hover:to-black">View project</a>
              </div>
            ))}
          </div>
        </div>
        <Features features={features} />
      </div>
    </section>
  )
}

export default Projects
