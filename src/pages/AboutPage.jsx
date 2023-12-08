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
            done: "BACHELOR OF SCIENCE(Non-med.)",
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
        <section className="text-gray-600 bg-rangTwo body-font">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col flex-wrap items-center w-full mb-12 text-center">
                    <h1 className="mb-4 text-2xl font-medium text-gray-900 underline uppercase sm:text-3xl title-font underline-offset-4">About Me</h1>

                    {/* about me description */}
                    <p className="w-full text-lg leading-relaxed lg:w-1/2 text-rangZero">Hi, My name is Shailesh Rawat. I am a ReactJs Developer with hands on knowledge of the latest and demanding technologies in the field of frontend development.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">

                    {/* about me cards */}
                    {
                        aboutMe.map(({ id, done, timeline, place, desc }) => (
                            <div className="p-4 xl:w-1/3 md:w-1/2" key={id}>
                                <div className="p-6 text-center border rounded-lg shadow-lg border-rangZero md:h-80 bg-rangTwo">
                                    <h2 className="mb-2 text-lg font-bold tracking-wide text-gray-900 underline title-font underline-offset-2">{done}</h2>
                                    <p className='leading-relaxed text-rangTwo '>{timeline}</p>
                                    <p className='leading-relaxed text-rangFour'>FROM: {place}</p>
                                    <p className="text-base leading-relaxed text-rangZero">
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
