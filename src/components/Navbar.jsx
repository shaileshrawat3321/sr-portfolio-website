import React from 'react'

const Navbar = () => {
    return (
        <div className='grid grid-cols-3 gap-x-10 mx-auto'>
            {/* <div> */}
            <h1>Shailesh Rawat</h1>
            {/* </div> */}
            {/* <div > */}
            <ul className='grid grid-cols-4'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Projects</li>
            </ul>
            {/* </div> */}
            {/* <div> */}
            <button>Download resume</button>
            {/* </div> */}
        </div>
    )
}

export default Navbar
