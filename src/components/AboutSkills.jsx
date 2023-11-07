import {

    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava,
    DiPhp
} from "react-icons/di";
import {
    SiFirebase,
    SiPostgresql,
    SiGnubash,
    SiTailwindcss,
} from "react-icons/si";
import { BiLogoVuejs } from "react-icons/bi";
import { CgCPlusPlus } from "react-icons/cg"

function AboutSkills() {
    return (
        <div className="flex flex-wrap justify-center py-8">
            <div className="tech-icons">
                <CgCPlusPlus />
            </div>
            <div className="tech-icons">
                <DiJavascript1 />
            </div>
            <div className="tech-icons">
                <DiPython />
            </div>
            <div className="tech-icons">
                <DiJava />
            </div>
            <div className="tech-icons">
                <DiPhp />
            </div>
            <div className="tech-icons">
                <SiGnubash />
            </div>
            <div className="tech-icons">
                <DiReact />
            </div>
            <div className="tech-icons">
                <BiLogoVuejs />
            </div>
            <div className="tech-icons">
                <SiTailwindcss />
            </div>
            <div className="tech-icons">
                <DiNodejs />
            </div>
            <div className="tech-icons">
                <DiMongodb />
            </div>
            <div className="tech-icons">
                <SiPostgresql />
            </div>
            <div className="tech-icons">
                <DiGit />
            </div>
            <div className="tech-icons">
                <SiFirebase />
            </div>
        </div>
    )
}

export default AboutSkills