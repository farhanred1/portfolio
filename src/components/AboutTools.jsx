import {
    SiVisualstudiocode,
    SiPostman,
    SiSlack,
    SiVercel,
    SiMacos,
    SiDocker,
} from "react-icons/si";

function AboutTools() {
    return (
        <div className="flex flex-wrap justify-center py-8">

            <div className="tech-icons">
                <SiMacos />
            </div>
            <div className="tech-icons transform origin-center hover:scale-110">
                <SiVisualstudiocode />
            </div>
            <div className="tech-icons">
                <SiPostman />
            </div>
            <div className="tech-icons">
                <SiDocker />
            </div>
            <div className="tech-icons">
                <SiSlack />
            </div>
            <div className="tech-icons">
                <SiVercel />
            </div>

        </div>
    )
}

export default AboutTools