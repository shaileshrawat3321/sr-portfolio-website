import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Button } from "flowbite-react"
import resumePdf from '../resume/shailesh-rawat-front-end-developer-resume.pdf'
const Header = () => {

    const openPDF = () => {
        window.open(resumePdf, "_blank")
    }
    return (

        <Navbar className="bg-rangOne text-rangThree"
            fluid
            rounded
        >
            <Link>
                <Navbar.Brand href="https://flowbite-react.com">
                    <span className="text-lg py-4 md:py-2 self-center whitespace-nowrap md:text-2xl font-semibold text-rangFour">
                        SHAILESH RAWAT
                    </span>

                </Navbar.Brand>
            </Link>
            <div className="flex md:order-2">
                <Button
                    onClick={openPDF}
                    className="mr-5 text-rangFour bg-rangZero hover:bg-rangFour hover:text-rangZero transition duration-300 ease-in-out font-bold">
                    GET RESUME

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="pl-2 w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                    </svg>

                </Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>

                {/* links to different routes */}
                <Link to='/'>
                    <Navbar.Link> <p> HOME </p> </Navbar.Link>
                </Link>

                <Link to='/about'>
                    <Navbar.Link>
                        ABOUT
                    </Navbar.Link>
                </Link>
                <Link to='/projects'>
                    <Navbar.Link>
                        PROJECTS
                    </Navbar.Link>
                </Link>
                <Link to='/skills'>
                    <Navbar.Link>
                        SKILLS
                    </Navbar.Link>
                </Link>
                <Link to='/contact'>
                    <Navbar.Link>
                        CONTACT
                    </Navbar.Link>
                </Link>

            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
