import PropTypes from 'prop-types'

const ProjectTool = ({ name }) => {
    return (
        <code className="px-1 bg-[#343942] rounded-md">
            {name}
        </code>
    );
}
ProjectTool.propTypes = {
    name: PropTypes.string.isRequired,
};
export default ProjectTool