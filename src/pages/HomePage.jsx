import myPic from '../assets/my-pic-blue.jpg'
import { Link } from 'react-router-dom'
import resumePdf from '../resume/shailesh-rawat-resume.pdf'
const HomePage = () => {

    const openPDF = () => {
        window.open(resumePdf, "_blank")
    }
    return (
        <section className="bg-rangTwo text-rangFour body-font">
            <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
                <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
                    <h1 className="mb-3 text-xl font-medium sm:text-2xl text-rangFour">
                        Looking for a frontend developer ?

                    </h1>
                    <h1 className='mb-3 text-xl sm:text-2xl'>Hi, I am&nbsp;
                        <span className='text-2xl font-bold sm:text-4xl text-rangZero'>
                            SHAILESH RAWAT
                        </span>
                    </h1>
                    <p className="mb-8 leading-relaxed sm:max-w-lg">I am frontend web developer currently lives in Panchkula, India. I enjoy creating interactive <span className='font-bold text-rangZero'>WEBAPP</span> with the help of Javascript's modern & fantastic library &nbsp;<span className='font-bold text-rangZero'>REACT.</span>

                    </p>
                    <div className="flex justify-center">
                        {/* <Link> */}
                        <button
                            onClick={openPDF}
                            className="inline-flex px-6 py-2 transition duration-700 ease-in-out rounded-md text-md md:text-lg text-rangZero bg-rangFour focus:outline-none hover:bg-rangZero hover:text-rangFour hover:scale-110 hover:duration-1000">GET RESUME
                        </button>
                        {/* </Link> */}
                        <Link to='/contact'>
                            <button className="inline-flex px-6 py-2 ml-4 transition duration-700 ease-in-out rounded md:text-lg focus:outline-none text-md text-rangFour bg-rangZero hover:bg-rangFour hover:text-rangZero hover:scale-110 hover:duration-1000">CONTACT ME
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="w-5/6 lg:max-w-md lg:w-full md:w-1/2">
                    <img className="object-cover object-center rounded-full" alt="profile" src={myPic} />
                </div>
            </div>
        </section>

    )
}

export default HomePage
