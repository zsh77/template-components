import React, { FC } from 'react'
import classJoin from 'Utils/classJoin'

interface IIconProps {
  icon: string
  className?: string
  size?: string
  color?: string
}

const Icon: FC<IIconProps> = (props) => {
  const { icon, className, size, color } = props

  return (
    <div role="icon" className={classJoin([size, color, className])}>
      {icon}
    </div>
  )
}

export default Icon

Icon.defaultProps = {
  className: '',
  size: '',
  color: 'text-black',
}
