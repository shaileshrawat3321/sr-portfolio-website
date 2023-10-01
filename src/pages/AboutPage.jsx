import React from 'react'

const AboutPage = () => {

    const aboutMe = [
        {
            id: 1,
            done: "MERN STACK DEVELOPMENT COURSE",
            timeline: "DEC 2022 - SEPT 2023",
            place: "Coding Ninjas",
            desc: "Learned about the latest fullstack technologies, especially React"
        },
        {
            id: 2,
            done: "INTERNSHIP - TEACHING ASSISTANCE(JAVA & DSA)",
            timeline: "NOV 2022 - MAR 2023",
            place: "Coding Ninjas",
            desc: "I completed my 4 months internship in Coding Ninjas as Teaching assistant of Java and DSA. The key responsibilities during the internship were taking doubt of students and help them in debugging the code."
        },
        {
            id: 3,
            done: "JAVA & DATA STRUCTURE COURSE",
            timeline: "JUNE 2022 - DEC 2022",
            place: "Coding Ninjas",
            desc: "Learned the fundamentals of programming and Data structures in Java"
        },
        {
            id: 4,
            done: "BACHELOR OF SCIENCE (B.Sc)",
            timeline: "AUG 2017 - OCT 2020",
            place: "Post Graduate Govt. College Sec-11, Chandigarh",
            desc: "I done my UG degree in science from Post Graduate Govt. College."
        },
        {
            id: 5,
            done: "12th SCHOOL",
            timeline: "2017 PASSED OUT",
            place: "GM.S.S.S. Sec 21-A, Chandigarh",
            desc: "I completed my Intermediate in Non-medical from Govt Model Sr Sec School Sec 21-A, Chandigarh."
        }
    ]

    return (
        <section className="bg-rangTwo text-gray-600 body-font">
            <div className="container px-5 py-16 mx-auto">
                <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 uppercase underline underline-offset-4">About Me</h1>

                    {/* about me description */}
                    <p className="lg:w-1/2 w-full leading-relaxed text-lg text-rangZero">Frontend Developer with hands-on knowledge of the latest and demanding technologies in the field of frontend development. I am <span className='text-rangFour'>passionate</span>  about creating <span className='text-rangFour'>user-centric </span>  web apps using Javascript’s famous library<span className='text-rangFour'> React.</span></p>
                </div>
                <div className="flex flex-wrap -m-4">

                    {/* about me cards */}
                    {
                        aboutMe.map(({ id, done, timeline, place, desc }) => (
                            <div className="xl:w-1/3 md:w-1/2 p-4" key={id}>
                                <div className="border border-rangZero p-6 rounded-lg md:h-80 text-center shadow-lg bg-rangTwo">
                                    <h2 className="text-lg text-gray-900 title-font mb-2 font-bold underline underline-offset-2 tracking-wider">{done}</h2>
                                    <p className='leading-relaxed text-rangTwo '>{timeline}</p>
                                    <p className='leading-relaxed text-rangFour'>FROM: {place}</p>
                                    <p className="leading-relaxed text-base text-rangZero">
                                        <span className='text-rangFour'>
                                            DESCRIPTION:&nbsp;
                                        </span>
                                        {desc}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default AboutPage;
