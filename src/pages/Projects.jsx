import Header from "../components/Header"
import Footer from "../components/Footer"
import ProjectCard from "../components/ProjectCard"
import ems from '../assets/ems.png'
import concord from '../assets/concord.png'
import HeroImage from '../assets/Hero.png'
function Projects() {
    return (
        <div className="min-h-screen flex flex-col text-stone-50 bg-[#222831]">
            <Header />

            <main className="container mx-auto p-7 pt-20 flex-1 text-center flex flex-col justify-center">
                <div className='md:max-w-6xl m-auto'>
                    <div className="flex flex-col justify-normal items-center gap-4 pb-6">
                        <div className="py-6">
                            <span className="text-zinc-100 text-4xl font-bold">My recent </span>
                            <span className="text-[#20B486] text-4xl font-bold">works</span>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
                            <ProjectCard
                                imgPath={ems}
                                isBlog={false}
                                title="Employee Management System"
                                description="A web app to streamline employee data management. Allows users to efficiently create, read, update, and delete employee records and department informations. Flexible architecture to facilitate easy integration and dockerization for scalability and efficient deployment."
                                ghLink="https://github.com/farhanred1/employee-management"
                                demoLink="https://blogs.soumya-jit.tech/"
                                tools={["HTML", "CSS", "JS", "ExpressJS", "NodeJS", "MongoDB"]}
                            />
                            <ProjectCard
                                imgPath={concord}
                                isBlog={false}
                                title="Concord"
                                description="A multi-user mental health application featuring journaling, access to help resources, and counselor booking. It incorporates CRUD functionality, profile management, and adheres to Object-Oriented Programming (OOP) principles. Furthermore, the app leverages Firebase services for real-time database updates, secure authentication, and cloud storage."
                                ghLink="https://github.com/farhanred1/Concord"
                                demoLink="https://blogs.soumya-jit.tech/"
                                tools={["Java", "Firebase", "Android Studio"]}
                            />
                            <ProjectCard
                                imgPath={HeroImage}
                                isBlog={false}
                                title="Bits-0f-C0de"
                                description="Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
                                ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
                                demoLink="https://blogs.soumya-jit.tech/"
                            />
                        </div>
                    </div>



                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Projects