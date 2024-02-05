import Header from "../components/Header"
import Footer from "../components/Footer"
import HeroImage from "../assets/Hero.png"
import pdf from "../assets/farhanreduan_resume.pdf"
import Typewriter from "typewriter-effect"
import { Link } from "react-router-dom";

import { HiOutlineDownload, HiOutlineExternalLink } from "react-icons/hi"
function Home() {
    return (
        <div className="min-h-screen flex flex-col text-stone-50 bg-[#222831]">
            <Header />
            <main className="container mx-auto p-7 pt-20 flex-1 text-center flex flex-col justify-center">
                <div className='md:max-w-6xl m-auto grid md:grid-cols-2 max-w-[600px] justify-center items-center gap-8'>

                    <div className='flex flex-col justify-start gap-4 text-left'>
                        <p className='py-2 text-2xl text-[#20B486] font-medium'>HI, I’M FARHAN</p>
                        <h1 className='md:leading-20 lg:text-6xl text-5xl font-semibold'>
                            I’M A <span className='md:leading-20 lg:text-5xl text-4xl text-[#20B486]'><Typewriter
                                options={{
                                    strings: [
                                        "Software Engineer",
                                        "Full Stack Developer",
                                        "Freelancer",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                }}
                            /></span>
                        </h1>

                        <p className='py-2 text-lg text-stone-50 text-opacity-50'>Exploring the Intersection of Code and Creativity</p>
                        <div className="md:flex grid gap-6">

                            <Link
                                to="/portfolio/projects/"
                                target=""
                                className="px-8 py-2.5 bg-[#20B486] rounded-3xl font-bold justify-center items-center gap-2.5 inline-flex whitespace-nowrap"
                            >
                                VIEW PROJECTS
                                <HiOutlineExternalLink />
                            </Link>

                            <a
                                href={pdf}
                                target="_blank"
                                download="Farhan_Reduan_Resume.pdf"
                                rel="noopener noreferrer"
                                className="px-8 py-2.5 bg-zinc-700 bg-opacity-75 rounded-3xl font-bold backdrop-blur-sm justify-center items-center gap-2.5 inline-flex whitespace-nowrap"
                            >
                                Download CV
                                <HiOutlineDownload />
                            </a>


                        </div>

                    </div>
                    <div className="flex justify-end">
                        <img src={HeroImage} className='' alt="Hero Image" />
                    </div>


                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Home