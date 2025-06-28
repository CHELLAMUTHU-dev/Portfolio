import ThemeContext from './context/ThemeContext'
import { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills  from './components/Skills';
import Project from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component{
  state={
    isDarkTheme: false,
  }


  setTheme = () => {
    this.setState(prevState => ({
      isDarkTheme : !prevState.isDarkTheme
    }))
  }

  render(){
    const {isDarkTheme} = this.state
    return(
      <ThemeContext.Provider  value={{isDarkTheme,setTheme:this.setTheme}}>
          <Header/>
          <Hero/>
          <About/>
          <Skills/>
          <Project/>
          <Contact/>
          <Footer/>
      </ThemeContext.Provider>
    )
  }


}

export default App;
