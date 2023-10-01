import React from 'react'

const ContactPage = () => {

    return (
        <main name='contact' className='w-full md:pt-3 h-screen bg-gradient-to-b bg-rangTwo text-rangFour'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto '>

                {/* heading section */}
                <section className='pb-6'>
                    <p className=' text-2xl md:text-4xl font-bold border-b-2 border-slate-700 uppercase text-center pt-1'>Contact Me</p>
                    <p className='py-3 text-md text-start md:text-center'>EMAIL ADDRESS : <span className='font-bold text-rangZero'>shailesh.rawat5021@gmail.com</span></p>
                    <p className='text-md text-start md:text-center'>CONTACT NUMBER <span className='font-bold tracking-wider text-rangZero'> +91 7814945270</span> </p>
                </section>

                {/* form section  */}
                <section className='flex justify-center items-center'>
                    <form
                        action="https://getform.io/f/d5ce4354-37e5-4e9d-b19f-6fa55c3effc6"
                        method='POST'
                        className='flex flex-col lg:gap-5 w-full md:w-1/2'>
                        <input
                            type="text"
                            name='name'
                            placeholder='ENTER THE NAME'
                            className='mb-3 p-2 rounded-md bg-transparent text-slate-800 focus:outline-0 outline-white placeholder-rangZero text-center md:text-start'
                        />
                        <input
                            type="email"
                            name='email'
                            placeholder='ENTER YOUR EMAIL'
                            className='mb-3 p-2 rounded-md bg-transparent text-slate-800 focus:outline-none placeholder-rangZero text-center md:text-start' 
                        />
                        <textarea
                            name="message"
                            rows="7"
                            placeholder='ENTER YOUR MESSAGE'
                            className='mb-3 p-2 rounded-md bg-transparent text-slate-800 focus:outline-none placeholder-rangZero text-center md:text-start'
                        >
                        </textarea>
                        <button className='font-bold uppercase px-5 py-3 mx-auto flex items-center rounded-md text-rangFour bg-rangZero hover:bg-rangFour hover:text-rangZero transition duration-700 ease-in-out'>Let's Talk</button>
                    </form>
                </section>
            </div>
        </main>
    )
}

export default ContactPage;
