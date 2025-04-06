import { SECTION_IDS } from "../../constants"
import img from "../../assets/images/about-img.png"
import "./about-section.css"

const AboutSection = () => {
  return (
    <section id={SECTION_IDS.ABOUT} className='about'>
      <div className='about-content'>
        <div className='about-title'>About Us</div>
        <div className='about-text'>
          <p>
            At Clover, we are dedicated to transforming the medical field
            through our comprehensive approach, which includes cutting-edge
            research, efficient clinical trials, and advanced digital health
            solutions.
          </p>
          <p>
            Our mission is to improve patient outcomes and enhance the
            efficiency of healthcare delivery, making a significant impact on
            the well-being of individuals and communities worldwide.
          </p>
        </div>
      </div>
      <div className='about-img'>
        <img src={img} alt='' />
      </div>
    </section>
  )
}

export { AboutSection }
