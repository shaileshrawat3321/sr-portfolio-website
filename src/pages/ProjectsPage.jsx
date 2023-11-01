import { Link } from "react-router-dom"
// project images
import textHelper from '../assets/texthelper-unsized.png'
import weatherMate from '../assets/weathermate.png'
import authSystem from '../assets/authentication-system.png'
import bingeFlix from '../assets/binge-flix.png'
import shieldCode from '../assets/shield-code.png'
import todX from '../assets/todX.png'
import ottoMatic from '../assets/ottomatic.png'
const ProjectsPage = () => {

  const completedProjects = [
    {
      id: 0,
      title: 'texthelper',
      img: textHelper,
      techStack: "Basics of Reactjs, Concept of State and Props, Bootstrap for styling",
      desc: "TextHelper is a text utility app that helps in converting the text in different formats.",
      hostedLink: "https://shaileshrawat3321.github.io/texthelper/",
      githubLink: "https://github.com/shaileshrawat3321/texthelper"
    },
    {
      id: 1,
      title: 'weathermate',
      img: weatherMate,
      techStack: "Basics of Reactjs, API Handling, Bootstrap for styling",
      desc: "WeatherMate is a weather forecast react webapp, which takes information from Weather API and displays it.",
      hostedLink: "https://weathermate-webapp.netlify.app/",
      githubLink: "https://github.com/shaileshrawat3321/weathermate"
    },
    {
      id: 2,
      title: 'AUTHENTICATION SYSTEM USING REACT & FIREBASE',
      img: authSystem,
      techStack: "Reactjs, State management using Context API, Bootstrap for styling and Firebase Authentication.",
      desc: "A Reactjs app in which user can create its account and can login using its credentials or with Google account.",
      hostedLink: "https://auth-system-react.netlify.app/",
      githubLink: "https://github.com/shaileshrawat3321/authsys-rf"
    },
    {
      id: 3,
      title: 'Binge flix',
      img: bingeFlix,
      techStack: "Reactjs, React class based components, state and props management",
      desc: "BingeFlix is a basic Reactjs webapp in which user can add or delete his favourite movie to cart and can rate the movie.",
      hostedLink: "https://shaileshrawat3321.github.io/binge_flix/",
      githubLink: "https://github.com/shaileshrawat3321/binge_flix"
    },
    {
      id: 4,
      title: 'Shield Code',
      img: shieldCode,
      techStack: 'React.js, React Hooks, Tailwind CSS',
      desc: 'Shield Code is a modern random password generator, that helps in generating secure and reliable passwords that users can create and copy for future reference.',
      hostedLink: 'https://shieldcode.netlify.app/',
      githubLink: 'https://github.com/shaileshrawat3321/shieldcode'
    }
  ]

  const upcomingProjects = [
    {
      id: 0,
      title: 'TodX',
      img: todX,
      techStack: "Reactjs, Redux Toolkit for state management, Tailwind for styling and much more.",
      desc: "Todos are very important part of our daily life it helps us in better management of daily tasks.TodX is a todo application in which user can add, edit and delete his daily todos.",
    },
    {
      id: 1,
      title: "Ottomatic store",
      img: ottoMatic,
      techStack: "Reactjs, Redux Toolkit for state management, Tailwind for styling and much more.",
      desc: "Online Shopping nowadays become very efficient for purchasing goods and services. Ottomatic store as name suggests is a online e-commerce web application in which user can register and can do shopping.",
    }
  ]

  return (
    <section className="text-gray-600 bg-rangTwo body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">

          {/* completed project */}
          {
            completedProjects.map((p) => (
              <div className="p-4 md:w-1/3" key={p.id}>
                <div className="container h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
                  <img src={p.img} alt="blog"
                    className="object-cover object-center w-1/3 mx-auto lg:h-48 md:h-32 md:w-2/3"
                  />
                  <div className="p-6">

                    {/* project name */}
                    <h1 className="mb-3 text-lg font-bold tracking-wider text-center text-gray-900 underline uppercase title-font underline-offset-4">{p.title}</h1>

                    {/* project knowlegde */}
                    <h2 className="tracking-wider text-md title-font font-medium text-rangZero mb-1.5">
                      <span className="underline underline-offset-2">TECH STACK</span>
                      : {p.techStack}
                    </h2>

                    {/* project desc */}
                    <p className="mb-3 leading-relaxed"><span className="underline underline-offset-2">DESCRIPTION</span>: {p.desc}</p>

                    <div className="flex flex-wrap items-end justify-between">

                      {/* project hosted link */}
                      <Link
                        to={p.hostedLink}
                        target="_blank"
                        className="inline-flex items-center text-rangFour md:mb-2 lg:mb-0"
                      >
                        <button className="px-3 py-2 transition duration-700 ease-in-out rounded-md text-rangFour bg-rangZero hover:bg-rangFour hover:text-rangZero"> View Project
                        </button>
                      </Link>

                      {/* project github link */}
                      <Link
                        to={p.githubLink}
                        target="_blank"
                        className="inline-flex items-center text-rangFour md:mb-2 lg:mb-0">
                        <button className="px-3 py-2 transition duration-700 ease-in-out rounded-md bg-rangFour text-rangZero hover:bg-rangZero hover:text-rangFour" >
                          View Code
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }

          {/* upcoming project */}
          {
            upcomingProjects.map((p) => (
              <div className="p-4 md:w-1/3" key={p.id}>
                <div className="container h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
                  <img src={p.img} alt="blog"
                    className="object-cover object-center w-1/3 mx-auto lg:h-48 md:h-32 md:w-2/3"
                  />
                  <div className="p-6">

                    {/* project name */}
                    <h1 className="mb-3 text-lg font-bold tracking-wider text-center text-gray-900 underline uppercase title-font underline-offset-4">{p.title}</h1>

                    {/* project knowlegde */}
                    <h2 className="tracking-wider text-md title-font font-medium text-rangZero mb-1.5">
                      <span className="underline underline-offset-2">TECH STACK</span>
                      : {p.techStack}
                    </h2>

                    {/* project desc */}
                    <p className="mb-3 leading-relaxed"><span className="underline underline-offset-2">DESCRIPTION</span>: {p.desc}</p>

                    <div className="flex flex-wrap items-end justify-center">

                      {/* project hosted link */}
                      <Link
                        to='/projects'
                        className="inline-flex items-center text-rangFour md:mb-2 lg:mb-0"
                      >
                        <button className="px-3 py-2 transition duration-700 ease-in-out rounded-md text-rangFour bg-rangZero hover:bg-rangFour hover:text-rangZero"> Coming Soon...
                        </button>
                      </Link>

                    </div>
                  </div>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </section>
  )
}

export default ProjectsPage
