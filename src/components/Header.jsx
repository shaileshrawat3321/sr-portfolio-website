import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Button } from "flowbite-react"
import resumePdf from '../../public/shailesh_rawat_front-end_developer_resume.pdf'
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
                    className="mr-5 text-rangFour bg-rangZero hover:bg-rangFour hover:text-rangZero transition duration-150 ease-in-out font-bold">
                    DOWNLOAD RESUME
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
