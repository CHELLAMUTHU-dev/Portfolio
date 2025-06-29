import theme_pattern from '../../assets/theme_pattern.svg'
import Bookhub from '../../assets/Bookhub.jpg'
import Ecommerce from '../../assets/Ecommerce.jpg'
import './index.css'


const Project = () => (
        <div id='projects'  className="projects">
            <div className="project-title">
                <h1>Projects</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <ul className="project-list">
                <li className="project">
                    <a href="https://bookmall.ccbp.tech/" target="_blank" rel="noopener noreferrer">
                    <img src={Bookhub} alt="" className='book-hub'/>
                    <p className="project-name">Bookhub</p>
                    <details>
                        <summary>User Details</summary>
                        <p className="user-data">Username : rahul</p>
                        <p className="user-data">Password : rahul@2021</p>
                    </details>
                    </a>
                </li>
                <li className="project">
                    <a href="https://ecommerce-smoky-chi-94.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img src={Ecommerce} alt="" className='e-commerce'/>
                        <p className="project-name">E-commerce</p>
                        <details>
                            <summary>User Details</summary> 
                                <p className="user-data">Username : own credential</p>
                                <p className="user-data">Password : own credential</p>
                        </details>
                    </a>
                </li>
            </ul>
        </div>
)

export default Project