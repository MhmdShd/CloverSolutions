import { ArrowTitle } from "../../components/ArrowTitle/ArrowTitle"
import { SECTION_IDS } from "../../constants"
import "./mission-section.css"
const MissionSection = () => {
  return (
    <div className='mission' id={SECTION_IDS.MISSION_VISION}>
      <div className='mission-container'>
        <div className='mission-item'>
          <div className='mission-arrow'>
            <ArrowTitle title='Mission' />
          </div>
          <div className='mission-text'>
            To revolutionize healthcare by providing innovative medical
            solutions through cutting-edge research, comprehensive clinical
            trials, and advanced digital health technologies. We aim to improve
            patient outcomes and enhance the efficiency of healthcare delivery.
          </div>
        </div>
        <div className='mission-item'>
          <div className='mission-arrow'>
            <ArrowTitle title='Vision' />
          </div>
          <div className='mission-text'>
            To be a global leader in healthcare innovation, transforming the
            medical landscape with our pioneering solutions. We envision a
            future where our technologies and research significantly contribute
            to the well-being of individuals and communities worldwide.
          </div>
        </div>
      </div>
    </div>
  )
}

export { MissionSection }
