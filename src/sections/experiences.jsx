import Heading from "../components/heading"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { minorHeading, majorHeading, subHeading, experiences } from "../constants/experiencesConstant"

const Experiences = () => {
  useGSAP(() => {
    const firms = gsap.utils.toArray(`.firm`)
    const taskes = gsap.utils.toArray(`.task`)

    firms.map(firm => {
      gsap.timeline({scrollTrigger: {
        trigger: firm,
        start: `top 80%`,
        end: `bottom bottom`,
        scrub: 5
      }})
      .from(
        firm,
        {xPercent: -100, opacity: 0, ease: `power1.out`}
      )
    })

    taskes.map(task => {
      gsap.timeline({scrollTrigger: {
        trigger: task,
        start: `top center`,
        end: `bottom center`,
        scrub: 10
      }})
      .from(
        task,
        {opacity: 0, ease: `power1.out`}
      )
    })
  })

  return (
    <section id="experience" className="bg-black text-white px-4 py-20 text-lg flex flex-col gap-30">
      <Heading minor={minorHeading} major={majorHeading} sub={subHeading} />
      <div className="flex flex-col gap-20 overflow-hidden lg:px-10">
        {experiences.map((experience, index) => (
          <div key={index} className="flex flex-col gap-5 sm:flex-row">
            <div className="flex gap-5 sm:order-2 sm:basis-[60%]">
              <div className="relative z-10 basis-[10%]">
                <img src={experience.image} alt="" className="bg-white p-0.5 rounded-full w-10 mx-auto" />
                <div className="bg-gradient-to-b from-amber-500 to-orange-600 h-[150%] w-[6%] absolute top-0 left-1/2 -z-10 lg:w-[2%]"></div>
              </div>
              <div className="task flex flex-col gap-5 basis-[90%]">
                <h3 className="font-bold ">{experience.title}</h3>
                <p>{experience.date}</p>
                <ul className="flex flex-col gap-3">
                  {experience.task.map((task, index) => (
                    <li key={index}><code>&bull;</code> {task}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="firm bg-neutral-800 p-4 flex flex-col gap-5 rounded-xl z-10 sm:order-1 sm:basis-[40%]">
              <p>{experience.description}</p>
              <div className="flex items-center gap-3">
                <img src={experience.image} alt="" className="w-10 rounded-lg" />
                <span className="font-bold">{experience.tag}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experiences
