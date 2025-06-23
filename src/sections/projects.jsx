import project1 from "../assets/images/project1.png"
import project2 from "../assets/images/project2.png"
import project3 from "../assets/images/project3.png"
import project4 from "../assets/images/project4.png"
import Heading from "../components/heading"

const Projects = () => {
  return (
    <section className="bg-black text-white px-4 py-10 text-lg flex flex-col gap-20">
      <Heading minor={`Samples i've built`} major={`A few completed Projects`} />
      <div className=" flex flex-col gap-10 lg:flex-row lg:gap-5">
        <div className="border-4 border-orange-600 flex flex-col gap-5">
            <div className=" p-2 rounded-xl flex flex-col gap-2 lg:items-center">
              <img src={project2} alt="project4" className="" />
              <p className="leading-tight text-center ">I’m a frontend web developer, focused on building mobile responsive and interactive websites for founders and business owners.</p>
            </div>
            <div className=" p-2 rounded-xl flex flex-col gap-2 lg:items-center">
              <img src={project4} alt="project4" className="" />
              <p className="leading-tight text-center ">I’m a frontend web developer, focused on building mobile responsive and interactive websites for founders and business owners.</p>
            </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <div className=" p-2 rounded-xl flex flex-col gap-2 lg:items-center border-4 border-orange-600">
              <img src={project4} alt="project4" className="" />
              <p className="leading-tight text-center ">I’m a frontend web developer, focused on building mobile responsive and interactive websites for founders and business owners.</p>
            </div>
            <div className=" p-2 rounded-xl flex flex-col gap-2 lg:items-center border-4 border-orange-600">
              <img src={project1} alt="project4" className="" />
              <p className="leading-tight text-center ">I’m a frontend web developer, focused on building mobile responsive and interactive websites for founders and business owners.</p>
            </div>
          </div>
          <div className="flex border-4 border-orange-600 gap-5">
            <div className=" p-2 rounded-xl flex flex-col gap-2 lg:items-center">
              <img src={project4} alt="project4" className="" />
              <p className="leading-tight text-center ">I’m a frontend web developer, focused on building mobile responsive and interactive websites for founders and business owners.</p>
            </div>
            <div className=" p-2 rounded-xl flex flex-col gap-2 lg:items-center">
              <img src={project4} alt="project4" className="" />
              <p className="leading-tight text-center ">I’m a frontend web developer, focused on building mobile responsive and interactive websites for founders and business owners.</p>
            </div>
          </div>
        </div>
        {/* <div className=" p-2 rounded-xl flex flex-col gap-2 lg:justify-center lg:basis-1/3">
          <img src={project1} alt="project1" className="lg:h-2/3 lg:object-cover" />
          <p className="leading-tight text-center">I’m a frontend web developer, focused on building mobile responsive and interactive websites for founders and business owners.</p>
        </div>
        <div className="flex flex-col gap-10 lg:basis-2/3 lg:gap-5">
            <div className="flex flex-col gap-10 lg:flex-row lg:gap-5">
                <div className=" p-2 rounded-xl flex flex-col gap-2">
                  <img src={project2} alt="project2" className="" />
                  <p className="leading-tight text-center">I’m a frontend web developer, focused on building mobile responsive and interactive websites for founders and business owners.</p>
                </div>
                <div className=" p-2 rounded-xl flex flex-col gap-2">
                  <img src={project3} alt="project3" className="" />
                  <p className="leading-tight text-center">I’m a frontend web developer, focused on building mobile responsive and interactive websites for founders and business owners.</p>
                </div>
            </div>
            <div className=" p-2 rounded-xl flex flex-col gap-2 lg:items-center">
              <img src={project4} alt="project4" className="" />
              <p className="leading-tight text-center ">I’m a frontend web developer, focused on building mobile responsive and interactive websites for founders and business owners.</p>
            </div>
        </div> */}
      </div>
      {/* <div className="bg-black flex flex-col gap-10 lg:grid lg:grid-cols-3 lg:grid-rows-2">
        <div className=" p-2 rounded-xl lg:row-span-2">
          <img src={project1} alt="project1" className="" />
          <p className="leading-tight mt-2">I’m a frontend web developer, focused on building mobile responsive and interactive websites for founders and business owners.</p>
        </div>
        <div className=" p-2 rounded-xl">
          <img src={project2} alt="project2" className="" />
          <p className="leading-tight mt-2">I’m a frontend web developer, focused on building mobile responsive and interactive websites for founders and business owners.</p>
        </div>
        <div className=" p-2 rounded-xl">
          <img src={project3} alt="project3" className="" />
          <p className="leading-tight mt-2">I’m a frontend web developer, focused on building mobile responsive and interactive websites for founders and business owners.</p>
        </div>
        <div className=" p-2 rounded-xl lg:col-span-2">
          <img src={project4} alt="project4" className="w-full" />
          <p className="leading-tight mt-2">I’m a frontend web developer, focused on building mobile responsive and interactive websites for founders and business owners.</p>
        </div>
      </div> */}
    </section>
  )
}

export default Projects
