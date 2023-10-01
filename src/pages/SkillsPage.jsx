const SkillsPage = () => {

    const skills = [
        {
            id: 0,
            tech: "java",
            lvl: "intermediate"
        },
        {
            id: 1,
            tech: "html",
            lvl: "intermediate"
        },
        {
            id: 2,
            tech: "css",
            lvl: "intermediate"
        },
        {
            id: 3,
            tech: "javascript",
            lvl: "intermediate"
        },
        {
            id: 4,
            tech: "react js",
            lvl: "intermediate"
        },
        {
            id: 5,
            tech: "bootstrap",
            lvl: "intermediate"
        },
        {
            id: 6,
            tech: "tailwind css",
            lvl: "beginner"
        },
        {
            id: 7,
            tech: "node js",
            lvl: "beginner"
        },
        {
            id: 8,
            tech: "express js",
            lvl: "beginner"
        },
        {
            id: 9,
            tech: "mongodb",
            lvl: "beginner"
        },
        {
            id: 10,
            tech: "mysql",
            lvl: "beginner"
        },
        {
            id: 11,
            tech: "firebase",
            lvl: "beginner"
        }

    ]

    return (
        <section className="bg-rangTwo text-gray-600 body-font">
            <div className="container px-5 py-16 mx-auto">
                <div className="flex flex-col text-center w-full mb-10">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-1 text-rangFour uppercase underline underline-offset-4">Skill section</h1>
                </div>
                <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                    <table className="table-auto w-full text-left whitespace-no-wrap">
                        <thead>
                            <tr>
                                <th className="px-4 py-3 title-font tracking-wider text-gray-900 text-sm bg-rangZero rounded-tl rounded-bl text-center uppercase font-bold">Technologies</th>
                                <th className="px-4 py-3 title-font tracking-wider text-rangZero text-sm bg-rangThree text-center uppercase font-bold">Skill Level</th>
                            </tr>
                        </thead>

                        {/* skills list */}
                        <tbody>
                            {
                                skills.map(({ id, tech, lvl }) => (
                                    <tr key={id}>
                                        <td className="px-4 py-3 text-center uppercase text-rangFour"> {tech}</td>
                                        <td className="px-4 py-3 text-center uppercase">{lvl}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default SkillsPage;
