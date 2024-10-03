import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState("Light")

  const toggleTheme = () => {
    const newTheme = theme === "Light" ? "Dark" : "Light";
    setTheme(newTheme);
  };

  useEffect(() => {
    if (theme === "Dark") {
      document.body.style.backgroundColor = "#000";
      document.body.style.color = "#fff";
    } else {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
    }
  }, [theme]);


  return (
    <>
      <div className='content'>
        <button className='theme' onClick={toggleTheme}>
          {theme}
        </button>
        <h1 className='title'>My blog with {theme} Theme</h1>
        <p className='para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic at, sint magni numquam eligendi libero ratione laboriosam impedit dolor nisi in totam fugit illum maiores nobis natus recusandae suscipit voluptas cupiditate possimus ea quo illo. Fugit incidunt sunt molestiae similique! Maiores suscipit facere totam eius odio ab quam quasi repudiandae?</p>
      </div>
    </>
  )
}

export default App
