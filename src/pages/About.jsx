import Header from "../components/Header"
import Footer from "../components/Footer"
import AboutImg from "../assets/About.png"
import AboutSkills from "../components/AboutSkills";
import AboutTools from "../components/AboutTools";

function About() {
    return (
        <div className="min-h-screen flex flex-col text-stone-50 bg-[#222831]">
            <Header />

            <main className="container mx-auto p-7 pt-20 flex-1 text-center flex flex-col justify-center items-center">
                <div className="md:max-w-6xl max-w-[600px]">


                    <div className='grid md:grid-cols-2 justify-center items-center gap-8 pb-10'>

                        <div className='flex flex-col justify-start gap-2 text-left'>
                            <h1 className='text-zinc-100 py-2 md:text-6xl text-4xl font-semibold'>
                                About <span className="text-[#20B486] font-bold">me</span>
                            </h1>

                            <p className="text-zinc-100 text-opacity-75 text-lg font-normal">My name is <span className="text-[#20B486] font-bold">Farhan Reduan Ahammed</span>. I am a diploma graduate from Singapore
                                Polytechnic in Computer Engineering.</p>

                            <p className="text-zinc-100 text-opacity-75 text-lg font-normal">I am experienced in developing <span className="text-[#20B486] font-bold">web applications</span>, <span className="text-[#20B486] font-bold">mobile apps</span>, and <span className="text-[#20B486] font-bold">desktop software</span> using various technologies and languages.
                                I enjoy solving complex problems, learning new skills, and collaborating with other developers.</p>

                        </div>
                        <div className="flex items-center justify-end">
                            <img src={AboutImg} className='' alt="About Image" />
                        </div>

                    </div>

                    <div className="flex flex-col">

                        <h1 className='text-zinc-100 pt-4 md:text-4xl text-2xl font-semibold text-left'>
                            Professional <span className="text-[#20B486] font-bold">Skillset</span>
                        </h1>
                        <AboutSkills />

                    </div>

                    <div className="flex flex-col">

                        <h1 className='text-zinc-100 pt-4 md:text-4xl text-2xl font-semibold text-left'>
                            <span className="text-[#20B486] font-bold">Tools</span> Used
                        </h1>
                        <AboutTools />

                    </div>


                </div>
            </main>

            <Footer />
        </div>
    )
}

export default About