import { Link } from "react-router-dom"
import { FaGithub, FaLinkedin } from 'react-icons/fa'
const Footer = () => {
    return (
        <footer className="bg-rangOne text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

                    <span className="ml-3 text-xl uppercase border-y-2 border-b-slate-800">Connect with me</span>
                </div>

                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

                    <Link to='https://github.com/shaileshrawat3321' target="_blank">
                        <FaGithub className="text-4xl mr-6 text-black hover:scale-150 hover:duration-1000 hover:transition duration-700 ease-in-out" />
                    </Link>
                    <Link to='https://www.linkedin.com/in/shaileshrawat3321/' target="_blank">
                        <FaLinkedin className="text-4xl ml-6 text-blue-900 hover:scale-150 hover:duration-1000 hover:transition duration-700 ease-in-out" />
                    </Link>
                </span>
            </div>
        </footer>
    )
}

export default Footer
