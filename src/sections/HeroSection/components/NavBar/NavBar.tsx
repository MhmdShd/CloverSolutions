import React from "react"
import "./nav-bar.css"
import Logo from "../../../../assets/SVGs/full-logo.svg"
import { SECTION_IDS } from "../../../../constants"
import { IoMenuOutline } from "react-icons/io5"
import { IoMdClose } from "react-icons/io"

const Navbar: React.FC = () => {
  const navRef = React.useRef<HTMLDivElement>(null)
  const [isMenuVisible, setIsMenuVisible] = React.useState(true)

  const toggleNavBar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav")
      setIsMenuVisible(!isMenuVisible)
    }
  }
  const closeNavBar = () => {
    if (navRef.current) {
      navRef.current.classList.remove("responsive_nav")
      setIsMenuVisible(true)
    }
  }

  const toIdUrl = (id: string) => `/#${id}`

  return (
    <header>
      <div className='logo'>
        <img src={Logo} alt='logo' />
      </div>
      <nav ref={navRef}>
        <a onClick={closeNavBar} href={toIdUrl(SECTION_IDS.ABOUT)}>
          About us
        </a>
        <a onClick={closeNavBar} href={toIdUrl(SECTION_IDS.MISSION_VISION)}>
          Mission & Vision
        </a>
        <a onClick={closeNavBar} href={toIdUrl(SECTION_IDS.OBJECTIVES)}>
          Objectives
        </a>
        {/* <a onClick={closeNavBar} href={toIdUrl(SECTION_IDS.CONTACT)}>
          Contact us
        </a> */}
        <button className='nav-btn nav-close-btn' onClick={toggleNavBar}>
          <IoMdClose />
        </button>
      </nav>
      <button className='nav-btn' onClick={toggleNavBar}>
        {isMenuVisible && <IoMenuOutline />}
      </button>
    </header>
  )
}

export default Navbar
