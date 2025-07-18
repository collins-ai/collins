import CountUp from "react-countup"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import { span1, span2, span3, description, collins, countup } from "../constants/heroConstant"

const Hero = () => {
  const {ref, inView} = useInView({triggerOnce: false})
  const [startTyping, setStartTyping] = useState(false)
  const heroRef = useRef()

  useEffect(() => {
    setStartTyping(inView)
  }, [inView])

  useGSAP(() => {
    gsap.from(
      `h1 span, p`,
      {yPercent: 100, opacity: 0, stagger: .3, duration: 1, delay: 1, ease: `power1.out`}
    )
  }, {scope: heroRef})

  return (
    <section ref={heroRef} id="hero" className="bg-black text-white px-4 py-20 text-lg min-h-screen flex flex-col gap-20 sm:justify-around sm:gap-10 lg:gap-0">
      <div className="flex flex-col gap-20 lg:flex-row lg:items-center">
        <div className="flex flex-col gap-5">
          <h1 className="flex flex-col text-2xl font-bold sm:text-4xl">
            <span>{span1}</span>
            <span ref={ref}>{`a `}{startTyping && span2}</span>
            <span>{span3}</span>
          </h1>
          <p className="leading-tight text-neutral-400 sm:w-4/5 lg:w-full">{description}</p>
        </div>
        <div className="w-3/4 mx-auto">
          <img src={collins} alt="Sunday Collins" className="rounded-2xl sm:w-6/12 sm:mx-auto" />
        </div>
      </div>
      <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:justify-between lg:flex-nowrap">
        {countup.map((count, index) => (
          <div key={index} className="bg-neutral-800 px-4 py-2 flex flex-col rounded-xl sm:basis-[48%] lg:basis-1/4">
            <span className="text-2xl sm:text-3xl">
              <CountUp end={count.number} suffix={count.suffix} scrollSpyDelay={1000} enableScrollSpy />
            </span>
            <span>{count.description}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero
