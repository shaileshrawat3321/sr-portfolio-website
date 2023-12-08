import React from 'react'

const Navbar = () => {
    return (
        <div className='grid grid-cols-3 mx-auto gap-x-10'>
            <h1>Shailesh Rawat</h1>
            <ul className='grid grid-cols-4'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Projects</li>
            </ul>
            <button>Download resume</button>
        </div>
    )
}

export default Navbar
