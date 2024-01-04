import Benefits from './components/Benefits/benefits'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import HowItWorks from './components/HowItWorks/how-it-works'
import ProjectInfo from './components/ProjectInfo/project-info'
import ProjectSection from './components/ProjectSection/project-section'

function App() {
  return (
    <main>
      <Header />
      <ProjectInfo />
      <ProjectSection />
      <HowItWorks />
      <Benefits />
      <Footer />
    </main>
  )
}

export default App
