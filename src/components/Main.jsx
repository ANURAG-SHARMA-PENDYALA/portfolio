
import Contact from './Contact'
import Hero from './Hero'
import Projects from './Projects'
import Skills from './Skills'

const Main = () => {
  return (
    <main className='main container'>
       <Hero/>
       <Projects/>
       <Skills/>
       <Contact/>
    </main>
  )
}

export default Main