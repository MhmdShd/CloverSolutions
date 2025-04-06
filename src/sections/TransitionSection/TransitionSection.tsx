import { Separator } from "../../components/Separator/Separator"
import "./transition-section.css"

type TransitionSectionProps = {
  content: string
}

const TransitionSection = ({ content }: TransitionSectionProps) => {
  return (
    <>
      <Separator />
      <div className='transition'>{content}</div>
      <Separator />
    </>
  )
}

export { TransitionSection }
