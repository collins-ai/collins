import { ReactTyped } from "react-typed"
import collins from "../assets/images/collins.png"

const span1 = `Hi, I'm Sunday Collins`
const span3 = `shaping ideas into reality`
const description = `I’m a frontend web developer, focused on building mobile responsive and interactive websites for founders and business owners.`

const span2 = <ReactTyped
  strings={[
    `frontend web developer`,
    `responsive web designer`
  ]}
  typeSpeed={50}
  backSpeed={50}
  loop
/>

const countup = [
  {number: 2, suffix: `+`, description: `Years of Experience`},
  {number: 100, suffix: `%`, description: `Quality Focus`},
  {number: 30, suffix: `+`, description: `Completed Projects`},
  {number: 100, suffix: `%`, description: `Reliable Communication`}
]

export { span1, span2, span3, description, collins, countup }

