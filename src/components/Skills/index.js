import { useContext } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import javascript from '../../assets/javascript.svg'
import react from '../../assets/react.jpg'
import theme_pattern from '../../assets/theme_pattern.svg'
import node_js from '../../assets/node_js.svg'
import mongodb from '../../assets/mongodb.svg'
import mysql from '../../assets/mysql.svg'
import python from '../../assets/python.svg'
import github from '../../assets/github.svg'
import vscode from '../../assets/vscode.svg'
import postman from '../../assets/postman.svg'
import bootstrap from '../../assets/bootstrap.svg'
import type_script from '../../assets/type_script.svg'
import next_js from '../../assets/next_js.svg'
import {ThemeContext} from '../../context/ThemeContext'
import './index.css'


const Skills = () => {
    const {theme} = useContext(ThemeContext);
    const bgColor = theme === "dark" ? "skills-bg-black" : "skills-bg-white";
    return(
        <div id='skills' className={`skills ${bgColor}`}>
            <div className='skills-title'>
                <h1>Skills</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="skills-list">
                <h1 className='technology-name'>Frontend Technologies</h1>
                <div className='frontend-technology'>
                    <div className="skill-type">
                        <div className='logo-container'>
                            <img src={html} alt="" className="icon" />                              
                            <p>HTML5</p>
                        </div>
                        <div className='linear-progress'>
                            <hr style={{width:"150px"}}/>
                            <p>90%</p>
                        </div>
                        <div style={{ width: 70, height: 70 }} className='circular-bar'>
                            <CircularProgressbar value={90} text='90%' styles={{
                                path: {
                                    stroke: ' #b415ff',
                                    },
                                trail: {
                                    stroke: 'transparent',
                                    strokeLinecap: 'red',
                                    },
                                text: {
                                    fill: theme === 'dark' ? 'white' : 'black',
                                    fontSize: '20px',
                                    }}}
                            />
                        </div>
                    </div>
                    <div className="skill-type">
                        <div className="logo-container">
                            <img src={css} alt="" className="icon" />                              
                            <p>CSS3</p>
                        </div>
                        <div className='linear-progress'>
                            <hr style={{width:"150px"}}/>
                            <p>90%</p>
                        </div>
                        <div style={{ width: 70, height: 70 }} className='circular-bar'>
                            <CircularProgressbar value={90} text='90%' styles={{
                                path: {
                                    stroke: ' #b415ff',
                                    },
                                trail: {
                                    stroke: 'transparent',
                                    strokeLinecap: 'red',
                                    },
                                text: {
                                    fill: theme === 'dark' ? 'white' : 'black',
                                    fontSize: '20px',
                                    }}}
                            />
                        </div>
                    </div>
                    <div className="skill-type">
                        <div className="logo-container">
                            <img src={javascript} alt="" className="icon" />
                            <p>JavaScript</p>
                        </div>
                        <div className='linear-progress'>
                            <hr style={{width:"130px"}}/>
                            <p>80%</p>
                        </div>
                        <div style={{ width: 70, height: 70 }} className='circular-bar'>
                            <CircularProgressbar value={80} text='80%' styles={{
                                path: {
                                    stroke:' #b415ff',
                                    },
                                trail: {
                                    stroke: 'transparent',
                                    strokeLinecap: 'red',
                                    },
                                text: {
                                    fill: theme === 'dark' ? 'white' : 'black',
                                    fontSize: '20px',
                                    }}}
                            />
                        </div>                            
                    </div>
                    <div className="skill-type">
                        <div className="logo-container">
                            <img src={type_script} alt="" className='icon'/>           
                            <p>TypeScript</p>
                        </div>
                        <div className='linear-progress'>
                            <hr style={{width:"130px"}}/>
                            <p>80%</p>
                        </div>
                        <div style={{ width: 70, height: 70 }} className='circular-bar'>
                            <CircularProgressbar value={60} text='60%' styles={{
                                path: {
                                    stroke:'#b415ff',
                                    },
                                trail: {
                                    stroke: 'transparent',
                                    strokeLinecap: 'red',
                                    },
                                text: {
                                    fill: theme === 'dark' ? 'white' : 'black',
                                    fontSize: '20px',
                                }}}
                            />
                        </div>
                    </div>
                    <div className="skill-type">
                        <div className="logo-container">
                            <img src={react} alt="" className='icon'/>           
                            <p>React.js</p>
                        </div>
                        <div className='linear-progress'>
                            <hr style={{width:"130px"}}/>
                            <p>80%</p>
                        </div>
                        <div style={{ width: 70, height: 70 }} className='circular-bar'>
                            <CircularProgressbar value={90} text='90%' styles={{
                                path: {
                                    stroke:'#b415ff',
                                    },
                                trail: {
                                    stroke: 'transparent',
                                    strokeLinecap: 'red',
                                    },
                                text: {
                                    fill: theme === 'dark' ? 'white' : 'black',
                                    fontSize: '20px',
                                }}}
                            />
                        </div>
                    </div>
                    <div className="skill-type">
                        <div className="logo-container">
                            <img src={next_js} alt="" className='icon'/>           
                            <p>Next.js</p>
                        </div>
                        <div className='linear-progress'>
                            <hr style={{width:"130px"}}/>
                            <p>80%</p>
                        </div>
                        <div style={{ width: 70, height: 70 }} className='circular-bar'>
                            <CircularProgressbar value={60} text='60%' styles={{
                                path: {
                                    stroke:'#b415ff',
                                    },
                                trail: {
                                    stroke: 'transparent',
                                    strokeLinecap: 'red',
                                    },
                                text: {
                                    fill: theme === 'dark' ? 'white' : 'black',
                                    fontSize: '20px',
                                }}}
                            />
                        </div>
                    </div>
                    <div className="skill-type">
                        <div className="logo-container">
                            <img src={bootstrap} alt="" className='icon'/>           
                            <p>Bootstrap</p>
                        </div>
                        <div className='linear-progress'>
                            <hr style={{width:"130px"}}/>
                            <p>80%</p>
                        </div>
                        <div style={{ width: 70, height: 70 }} className='circular-bar'>
                            <CircularProgressbar value={80} text='80%' styles={{
                                path: {
                                    stroke:'#b415ff',
                                    },
                                trail: {
                                    stroke: 'transparent',
                                    strokeLinecap: 'red',
                                    },
                                text: {
                                    fill:theme === 'dark' ? 'white' : 'black',
                                    fontSize: '20px',
                                }}}
                            />  
                        </div>
                    </div>
                </div>
                <h1 className='technology-name'>Backend Technology</h1>
                <div className="backend-technology">
                    <div className="skill-type">
                        <div className="logo-container">
                            <img src={node_js} alt="" className="icon"  />
                            <p>Node JS</p>
                        </div>
                        <div className='linear-progress'>
                            <hr style={{width:"150px"}}/>
                            <p>90%</p>
                        </div>
                        <div style={{ width: 70, height: 70 }} className='circular-bar'>
                            <CircularProgressbar value={90} text='90%' styles={{
                                path: {
                                    stroke:' #b415ff',                                    
                                    },
                                trail: {
                                    stroke: 'transparent',
                                    strokeLinecap: 'red',
                                    },
                                text: {
                                    fill: theme === 'dark' ? 'white' : 'black',
                                    fontSize: '20px',
                                    }}}
                            />
                        </div>                            
                    </div>
                    <div className="skill-type">
                        <div className="logo-container">
                            <img src={mysql} alt="" className="icon" />
                            <p>MySQL</p>
                        </div>
                        <div className='linear-progress'>
                            <hr style={{width:"110px"}}/>
                            <p>70%</p>
                        </div>
                        <div style={{ width: 70, height: 70 }} className='circular-bar'>
                            <CircularProgressbar value={70} text='70%' styles={{
                                path: {
                                    stroke:'#b415ff',
                                    },
                                trail: {
                                    stroke: 'transparent',
                                    strokeLinecap: 'red',
                                    },
                                text: {
                                    fill: theme === 'dark' ? 'white' : 'black',
                                    fontSize: '20px',
                                    }}}
                            />
                        </div>                           
                    </div>
                    <div className="skill-type">
                        <div className="logo-container">
                            <img src={mongodb} alt="" className="icon" />
                            <p>Mongo DB</p>
                        </div>
                        <div className='linear-progress'>
                            <hr style={{width:"110px"}}/>
                            <p  >70%</p>
                        </div>
                        <div style={{ width: 70, height: 70 }} className='circular-bar'>
                            <CircularProgressbar value={70} text='70%' styles={{
                                path: {
                                    stroke:'#b415ff',
                                    },
                                trail: {
                                    stroke: 'transparent',
                                    strokeLinecap: 'red',
                                    },
                                text: {
                                    fill:theme === 'dark' ? 'white' : 'black',
                                    fontSize: '20px',
                                    }}}
                            />
                        </div>                        
                    </div>
                </div>
                <h1 className='technology-name'>Programming Language</h1>
                <div className="programming-language">
                    <div className="skill-type">
                        <div className="logo-container">
                            <img src={python} alt="" className="icon" />
                            <p>Python</p>
                        </div>
                        <div className='linear-progress'>
                            <hr style={{width:"130px"}} />
                            <p  >80%</p>
                        </div>
                        <div style={{ width: 70, height: 70 }} className='circular-bar'>
                            <CircularProgressbar value={80} text='80%' styles={{
                                path: {
                                    stroke:'#b415ff',
                                    },
                                trail: {
                                    stroke: 'transparent',
                                    strokeLinecap: 'red',
                                    },
                                text: {
                                    fill: theme === 'dark' ? 'white' : 'black',
                                    fontSize: '20px',
                                    }}}
                            />
                        </div>                            
                    </div>
                </div>
                <h1 className='technology-name'>Tools</h1>
                <div className="tools">
                    <div className="skill-type">
                        <div className="logo-container">
                            <img src={github} alt="" className="icon" />
                            <p>Git Hub</p>
                        </div>
                        <div className='linear-progress'>
                            <hr style={{width:"130px"}}/>
                            <p  >80%</p>
                        </div>
                        <div style={{ width: 70, height: 70 }} className='circular-bar'>
                            <CircularProgressbar value={80} text='80%' styles={{
                                path: {
                                    stroke:'#b415ff',
                                    },
                                trail: {
                                    stroke: 'transparent',
                                    strokeLinecap: 'red',
                                    },
                                text: {
                                    fill: theme === 'dark' ? 'white' : 'black',
                                    fontSize: '20px',
                                    }}}
                            />
                        </div>                            
                    </div>
                    <div className="skill-type">
                        <div className="logo-container">
                            <img src={vscode} alt="" className="icon" />
                            <p>VS Code</p>
                        </div>
                        <div className='linear-progress'>
                            <hr style={{width:"130px"}}/>
                            <p >80%</p>
                        </div>
                        <div style={{ width: 70, height: 70 }} className='circular-bar'>
                            <CircularProgressbar value={80} text='80%' styles={{
                                path: {
                                    stroke:'#b415ff',
                                    },
                                trail: {
                                    stroke: 'transparent',
                                    strokeLinecap: 'red',
                                    },
                                text: {
                                    fill: theme === 'dark' ? 'white' : 'black',
                                    fontSize: '20px',
                                    }}}
                            />
                        </div>                            
                    </div>
                    <div className="skill-type">
                        <div className="logo-container">
                            <img src={postman} alt="" className="icon" />
                            <p>Postman</p>
                        </div>
                        <div className='linear-progress'>
                            <hr style={{width:"130px"}}/>
                            <p >80%</p>
                        </div>
                        <div style={{ width: 70, height: 70 }} className='circular-bar'>
                            <CircularProgressbar value={80} text='80%' styles={{
                                path: {
                                    stroke:'#b415ff',
                                    },
                                trail: {
                                    stroke: 'transparent',
                                    strokeLinecap: 'red',
                                    },
                                text: {
                                    fill: theme === 'dark' ? 'white' : 'black',
                                    fontSize: '20px',
                                    }}}
                            />
                        </div>                            
                    </div>
                </div>
            </div>
        </div>
)
}
export default Skills