import React from 'react'

const ThemeContext = React.createContext({
    isDarkTheme: false,
    setTheme: () => {}
})


export default ThemeContext