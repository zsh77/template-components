import React, { FC } from 'react'
import classJoin from 'Utils/classJoin'

interface IIconProps {
  icon: string
  className?: string
  size?: string
  color?: string
  onClick?: () => void
  onFocus?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  'aria-label'?: string
  role?: string
}

const Icon: FC<IIconProps> = (props) => {
  const { icon, className, size, color, ...otherProps } = props

  return (
    icon && (
      <i
        className={classJoin(['gsfont-' + icon, size, color, className])}
        {...otherProps}
      />
    )
  )
}

export default Icon

Icon.defaultProps = {
  className: '',
  size: '',
  color: 'text-dark-text',
}
