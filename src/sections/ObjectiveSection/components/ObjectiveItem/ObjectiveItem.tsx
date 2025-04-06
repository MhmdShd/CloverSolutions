import "./objective-item.css"

interface ObjectiveItemProps {
  title: string
  description: string
  icon: string
}

const ObjectiveItem = ({ title, description, icon }: ObjectiveItemProps) => {
  return (
    <div className='objective-item'>
      <div className='objective-item-icon'>
        <img src={icon} alt='doctor' />
      </div>
      <div className='objective-item-content'>
        <div className='objective-item-title'>{title}</div>
        <div className='objective-item-description'>{description}</div>
      </div>
    </div>
  )
}

export { ObjectiveItem }
