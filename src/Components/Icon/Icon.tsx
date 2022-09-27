import React, { FC } from 'react'
import classJoin from 'Utils/classJoin'

interface IIconProps {
  icon: string
  className?: string
  size?: string
  color?: string
  onClick?: () => void
  onFocus?: () => void
}

const Icon: FC<IIconProps> = (props) => {
  const { icon, className, size, color, ...otherProps } = props

  return (
    <div
      role="icon"
      className={classJoin([size, color, className])}
      {...otherProps}
    >
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
