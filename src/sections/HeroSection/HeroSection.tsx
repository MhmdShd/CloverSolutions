import { Logo } from "../../assets/SVGs/logo"
import Navbar from "./components/NavBar/NavBar"
import "./hero-section.css"

const HeroSection = () => {
  return (
    <section className='hero-section'>
      <Navbar />
      <div className='hero-content'>
        <div className='hero-text'>
          Welcome to <br /> Clover Health Solutions,
          <br />
          Where Innovation <br />
          Meets Healthcare.
        </div>
        <div className='hero-img'>
          <Logo />
        </div>
      </div>
    </section>
  )
}

export { HeroSection }
