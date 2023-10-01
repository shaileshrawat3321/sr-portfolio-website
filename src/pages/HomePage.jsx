import myPic from '../assets/my-pic-blue.jpg'
import { Link } from 'react-router-dom'
import resumePdf from '../../public/shailesh_rawat_front-end_developer_resume.pdf'
const HomePage = () => {

    const openPDF = () => {
        window.open(resumePdf, "_blank")
    }
    return (
        <section className="bg-rangTwo text-rangFour body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="sm:text-2xl text-xl mb-3 font-medium text-rangFour">
                        Looking for a frontend developer ?

                    </h1>
                    <h1 className='text-xl sm:text-2xl mb-3'>Hi, I am&nbsp;
                        <span className='text-2xl sm:text-4xl font-bold text-rangZero'>
                            SHAILESH RAWAT
                        </span>
                    </h1>
                    <p className="mb-8 leading-relaxed sm:max-w-lg">I am frontend web developer currently lives in Panchkula, India. I enjoy creating interactive <span className=' font-bold text-rangZero'>WEBAPP</span> with the help of Javascript's modern & fantastic library &nbsp;<span className=' font-bold text-rangZero'>REACT.</span>

                    </p>
                    <div className="flex justify-center">
                        {/* <Link> */}
                        <button
                            onClick={openPDF}
                            className="text-md md:text-lg inline-flex text-rangZero bg-rangFour py-2 px-6 focus:outline-none hover:bg-rangZero hover:text-rangFour rounded-md transition duration-700 ease-in-out hover:scale-110 hover:duration-1000">GET RESUME
                        </button>
                        {/* </Link> */}
                        <Link to='/contact'>
                            <button className="md:text-lg ml-4 inline-flex py-2 px-6 focus:outline-none rounded text-md text-rangFour bg-rangZero hover:bg-rangFour hover:text-rangZero transition duration-700 ease-in-out hover:scale-110 hover:duration-1000">CONTACT ME
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded-full" alt="profile" src={myPic} />
                </div>
            </div>
        </section>

    )
}

export default HomePage
