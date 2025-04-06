import "./objective-section.css"
import DoctorIcon from "../../assets/SVGs/doctor-svgrepo-com.svg"
import CollaborativeIcon from "../../assets/SVGs/handshake-svgrepo-com.svg"
import leafIcon from "../../assets/SVGs/leaf-svgrepo-com.svg"
import lightIcon from "../../assets/SVGs/light-bulb-svgrepo-com.svg"
import flaskIcon from "../../assets/SVGs/flask-lab-medical-svgrepo-com.svg"
import researchIcon from "../../assets/SVGs/clinical-a-svgrepo-com.svg"
import { ObjectiveItem } from "./components/ObjectiveItem/ObjectiveItem"
import { SECTION_IDS } from "../../constants"

const OBJECTIVES = [
  {
    title: "Patient-Centric Approach",
    description:
      "Focus on patient needs and outcomes, ensuring our solutions are accessible and beneficial to all",
    icon: DoctorIcon,
  },
  {
    title: "Collaborative Partnerships",
    description:
      "Build strong partnerships with healthcare providers, research institutions, and technology companies to foster innovation and growth",
    icon: CollaborativeIcon,
  },
  {
    title: "Sustainable Practices",
    description:
      "Promote sustainability in all our operations, contributing to a healthier planet and society.",
    icon: leafIcon,
  },
  {
    title: "Innovative Research",
    description:
      "Conduct groundbreaking research to develop new treatments and medical technologies.",
    icon: lightIcon,
  },
  {
    title: "Innovative Research",
    description:
      "Streamline clinical trial processes to ensure faster, more accurate results and improved patient experiences",
    icon: researchIcon,
  },
  {
    title: "Digital Health Solutions",
    description:
      "Implement advanced digital tools to enhance patient care, data management, and healthcare delivery.",
    icon: flaskIcon,
  },
]

const ObjectiveSection = () => {
  return (
    <div className='objective' id={SECTION_IDS.OBJECTIVES}>
      <div className='objective-container'>
        <div className='objective-title'>OBJECTIVES</div>
        <div className='objective-body'>
          {OBJECTIVES.map(({ title, description, icon }, i) => (
            <ObjectiveItem
              key={i}
              title={title}
              description={description}
              icon={icon}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export { ObjectiveSection }
