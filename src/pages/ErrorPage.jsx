import { Link } from "react-router-dom"
const ErrorPage = () => {
    return (

        <main className="grid min-h-screen place-items-center bg-lightSecondary px-6 py-24 sm:py-32 lg:px-8 ele bg-rangTwo">
            <div className="text-center">
                <p className="text-3xl font-semibold text-rangFour">&#9888; Error 404 </p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-rangFour sm:text-5xl uppercase">Page not found</h1>
                <p className="mt-6 text-base leading-7 text-rangFour">Sorry, we couldn’t find the page you’re looking for.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        to="/"
                        className="text-lg rounded-md px-6 py-3 font-semibold shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-rangFour bg-rangZero hover:bg-rangFour hover:text-rangZero uppercase"
                    >
                        Go back home
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default ErrorPage
