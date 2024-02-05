import Header from "../components/Header"
import Footer from "../components/Footer"
import ProjectCard from "../components/ProjectCard"
import ems from '../assets/ems.png'
import concord from '../assets/concord.png'
import QueueUp from '../assets/Queue-up.png'
import Portfolio from '../assets/portfolio.png'

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
                                imgPath={QueueUp}
                                isBlog={false}
                                title="Queue-up"
                                description="A web application that simplifies how queues are managed by providing a user-friendly platform for creating and joining queues with real-time updates on queue status. Whether it's organizing events, handling customer service requests, or managing job applications, this application empowers users to streamline the queuing process effortlessly."
                                ghLink="https://github.com/farhanred1/Queue"
                                demoLink="https://drive.google.com/file/d/1j3FJI3TQwf-dkUF5ojSJLBXD4ZC-3o1X/view"
                                tools={["ReactJS", "NodeJS", "Tailwind", "MongoDB", "JWT", "WebSocket"]}
                            />
                            <ProjectCard
                                imgPath={ems}
                                isBlog={false}
                                title="Employee Management System"
                                description="A web app to streamline employee data management. Allows users to efficiently create, read, update, and delete employee records and department informations. Flexible architecture to facilitate easy integration and dockerization for scalability and efficient deployment."
                                ghLink="https://github.com/farhanred1/employee-management"
                                demoLink="https://drive.google.com/file/d/1mjqQebf5mKJVifW8qzAB1NDiraxX_gTz/view?usp=drive_link"
                                tools={["HTML", "CSS", "JS", "ExpressJS", "NodeJS", "MongoDB", "Docker"]}
                            />
                            <ProjectCard
                                imgPath={Portfolio}
                                isBlog={false}
                                title="Portfolio"
                                description="A simple portfolio website created using ReactJS framework. It is configured with implementation of Continuous Integration and Continuous Deployment using GitHub Actions and deployed to GitHub Pages."
                                ghLink="https://github.com/farhanred1/portfolio"
                                demoLink="https://farhanred1.github.io/portfolio/"
                                tools={["ReactJS", "Tailwind", "CI/CD"]}
                            />
                            <ProjectCard
                                imgPath={concord}
                                isBlog={false}
                                title="Concord"
                                description="A multi-user mental health application featuring journaling, access to help resources, and counselor booking. It incorporates CRUD functionality, profile management, and adheres to Object-Oriented Programming (OOP) principles. Furthermore, the app leverages Firebase services for real-time database updates, secure authentication, and cloud storage."
                                ghLink="https://github.com/farhanred1/Concord"
                                demoLink="https://drive.google.com/file/d/1T7PoDd1ryUIy-R2QfAe2NryPES_ZsZ5f/view?usp=drive_link"
                                tools={["Java", "Firebase", "Android Studio"]}
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