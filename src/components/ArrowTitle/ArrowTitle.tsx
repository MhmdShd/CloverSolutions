import { Arrow } from "../../assets/SVGs/Arrow"
import "./arrow-title.css"

interface ArrowTitleProps {
  title: string
}

const ArrowTitle = ({ title }: ArrowTitleProps) => {
  return (
    <div className='arrow-container'>
      <Arrow height={241} width={91} />
      <div className='arrow-title'>{title}</div>
    </div>
  )
}

export { ArrowTitle }
