import Heading from "../components/heading"
import { minorHeading, majorHeading, subHeading, skills } from "../constants/skillsConstant"

const Skills = () => {
  return (
    <section id="skills" className="bg-black text-white px-4 py-20 text-lg flex flex-col gap-30">
      <Heading minor={minorHeading} major={majorHeading} sub={subHeading} />
      <div className="flex flex-wrap justify-between gap-y-10 px-5 sm:gap-x-10 sm:justify-center lg:gap-x-20">
        {skills.map((skill, index) => (
          <div key={index} className="bg-neutral-100 rounded-4xl flex flex-col gap-5 justify-between items-center py-5 basis-[45%] relative overflow-hidden z-10 group sm:basis-[20%] sm:rounded-full sm:py-17 lg:basis-[12%]">
            <img src={skill.logo} alt="skill" className="w-1/2" />
            <span className="text-black font-bold group-hover:text-white">{skill.title}</span>
            <div className="bg-neutral-800 rounded-4xl h-full w-full absolute top-[100%] duration-1000 -z-10 group-hover:-translate-y-[100%]"></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
