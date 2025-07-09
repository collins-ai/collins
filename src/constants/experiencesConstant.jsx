import galleryOfCode from "../assets/logos/galleryOfCode.jpeg"
import freeCodeCamp from "../assets/logos/freeCodeCamp.jpeg"
import cqreINC from "../assets/logos/cqreINC.png"

const minorHeading = `My career path`
const majorHeading = `Experiences over the years`
const subHeading = `Hands-on experience working on practical frontend development, and real world projects that shaped my skills.`

const experiences = [
  {
    task: [
      `Received training in building websites for startups and businesses, from static HTML/CSS websites to fully dynamic websites using React and Tailwind CSS.`,
      `Successfully completed two side projects for real-world clients, a solar energy business and a real estate/construction business.`
    ],
    title: `Frontend Web Developer`, date: `🗓️ November 2024 - Present`, tag: `CQRE INC`, image: cqreINC,
    description: `CQRE INC is a consulting firm & diversified startup, designing products in renewable energy, emerging technologies, real estate, and building smart communities.`
  },
  {
    task: [
      `Completed five certification projects and multiple course assignments/projects provided by freeCodeCamp.`,
      `Earned the Responsive Web Design certification after completing the full course along with all required projects.`
    ],
    title: `Responsive Web Designer`, date: `🗓️ May 2025 - June 2025`, tag: `FreeCodeCamp`, image: freeCodeCamp,
    description: `FreeCodeCamp is a community of millions of people around the world who are learning to code together. Learn to code with free online courses and programming projects.`
  },
  {
    task: [
      `Acquired foundational skills in HTML, CSS, and JavaScript required for frontend web development during the training.`,
      `Gained the basic knowledge of backend development using Node.js and Express.js.`
    ],
    title: `Frontend Web Developer`, date: `🗓️ March 2024 - July 2024`, tag: `GalleryOfCode`, image: galleryOfCode,
    description: `GalleryOfCode is a multi-disciplinary technology innovation, research and development company. We create innovative solutions of technology and how it affects society.`
  }
]

export { minorHeading, majorHeading, subHeading, experiences }
