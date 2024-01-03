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

{
  /* <picture>
                <source srcSet="https://demo.smartbank.uz/images/elements/samsung.webp 1x, https://demo.smartbank.uz/images/elements/samsung@2x.webp 2x" type="image/webp">
                <source srcSet="https://demo.smartbank.uz/images/elements/samsung.png 1x, https://demo.smartbank.uz/images/elements/samsung@2x.png 2x" type="image/png">
                <img src="https://demo.smartbank.uz/images/elements/samsung.png" class="hidden xl:block w-72 pointer-events-none absolute right-8 bottom-32 -z-1 app__samsung hxl:w-[180px] hxl:bottom-24" alt="samsung" width="310" height="598">
            </picture> */
}
