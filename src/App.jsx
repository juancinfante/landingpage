import { Banner } from './components/Banner';
import { NavBar } from './components/NavBar';
import { Section } from './components/Section';

function App() {

  return (
    <>
      <NavBar />
      <Banner />
      <Section name="Nosotros" id="nosotros"/>
    </>
  )
}

export default App
