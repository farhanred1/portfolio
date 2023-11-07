import { CgWebsite } from "react-icons/cg"
import { BsGithub } from "react-icons/bs"
import ProjectTool from "./ProjectTool";
import PropTypes from 'prop-types';

ProjectCard.propTypes = {
    imgPath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ghLink: PropTypes.string.isRequired,
    isBlog: PropTypes.bool,
    demoLink: PropTypes.string,
    tools: PropTypes.arrayOf(PropTypes.string),
};

function ProjectCard(props) {
    return (
        <div className="border border-gray-300 shadow-lg rounded-lg overflow-hidden project-card flex flex-col">
            <img src={props.imgPath} alt="card-img" className="w-full h-56 p-2 object-cover" />
            <div className="px-6 py-4 flex-grow">
                <div className="font-bold text-xl mb-2">{props.title}</div>
                <p className="text-zinc-100 text-opacity-75 text-base text-justify flex-grow">
                    {props.description}
                </p>
            </div>
            <div className="px-6 flex flex-wrap gap-2 justify-center">
                {props.tools && props.tools.map((tool, index) => (
                    <ProjectTool key={index} name={tool} />
                ))}
            </div>
            <div className="px-6 py-4 grid lg:grid-cols-2 justify-center gap-2">
                <a
                    href={props.ghLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center justify-center"
                >
                    <BsGithub className="text-xl" />&nbsp;
                    {props.isBlog ? "Blog" : "GitHub"}
                </a>
                {props.demoLink && !props.isBlog && (
                    <a
                        href={props.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center justify-center"
                    >
                        <CgWebsite className="text-xl" />&nbsp;
                        Demo
                    </a>
                )}
            </div>
        </div>
    );
}


export default ProjectCard