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
import './index.css'


const Skills = () => (
        <div id='skills' className='skills'>
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
                                    fill: 'white',
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
                                    fill: 'white',
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
                                    fill: 'white',
                                    fontSize: '20px',
                                    }}}
                            />
                        </div>                            
                    </div>
                    <div className="skill-type">
                        <div className="logo-container">
                            <img src={react} alt="" className='icon'/>           
                            <p>React JS</p>
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
                                    fill: 'white',
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
                                    fill: 'white',
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
                                    fill: 'white',
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
                                    fill: 'white',
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
                                    fill: 'white',
                                    fontSize: '20px',
                                    }}}
                            />
                        </div>                            
                    </div>
                </div>
            </div>
        </div>
)
export default Skills