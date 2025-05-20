import React from 'react'

const Header = () => {
  return (
    <header>
       <nav className='container navbar flex'>
        <h3 className='primary-clr logo'>AS</h3>
        <ul className='nav-links flex'>
            <li ><a href="#hero">Home</a></li>
            <li id='projects'>Projects</li>
            <li id='skills'>Skills</li>
            <li id='resume'>Resume</li>
            <li id='contact'>Contact</li>
        </ul>
       </nav>
    </header>
  )
}

export default Header