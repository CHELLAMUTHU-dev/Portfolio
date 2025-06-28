import theme_pattern from '../../assets/theme_pattern.svg'
import './index.css'


const Project = () => (
        <div id='projects'  className="projects">
            <div className="project-title">
                <h1>Projects</h1>
                <img src={theme_pattern} alt="" />
            </div>
        </div>
)

export default Project