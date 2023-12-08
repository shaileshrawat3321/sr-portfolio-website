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
            tech: "git",
            lvl: "beginner"
        },
        {
            id: 8,
            tech: "github",
            lvl: "beginner"
        },
        {
            id: 8,
            tech: "mysql",
            lvl: "beginner"
        },
        {
            id: 9,
            tech: "node js",
            lvl: "beginner"
        },
        {
            id: 10,
            tech: "express js",
            lvl: "beginner"
        },

    ]

    return (
        <section className="text-gray-600 bg-rangTwo body-font">
            <div className="container px-5 py-16 mx-auto">
                <div className="flex flex-col w-full mb-10 text-center">
                    <h1 className="mb-1 text-3xl font-medium underline uppercase sm:text-4xl title-font text-rangFour underline-offset-4">Skill section</h1>
                </div>
                <div className="w-full mx-auto overflow-auto lg:w-2/3">
                    <table className="w-full text-left whitespace-no-wrap table-auto">
                        <thead>
                            <tr>
                                <th className="px-4 py-3 text-sm font-bold tracking-wider text-center text-gray-900 uppercase rounded-tl rounded-bl title-font bg-rangZero">Technologies</th>
                                <th className="px-4 py-3 text-sm font-bold tracking-wider text-center uppercase title-font text-rangZero bg-rangThree">Skill Level</th>
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
