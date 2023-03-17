import { FC, ReactElement } from 'react'
import classJoin from 'Utils/classJoin'

import styles from './Badge.module.scss'

interface IBadgeProps {
  children?: ReactElement
  content?: string | number
  color?: string
  className?: string
  wrapperClassName?: string
  size?: 'default' | 'lg'
}

const Badge: FC<IBadgeProps> = (props) => {
  const { content, color, children, size, className, wrapperClassName } = props

  return (
    <div className={classJoin([styles.wrapper, wrapperClassName])}>
      <div
        className={classJoin([
          size === 'lg' ? styles.lgBadge : styles.badge,
          color,
          className,
        ])}
      >
        {content}
      </div>
      {children}
    </div>
  )
}

export default Badge

Badge.defaultProps = {
  content: ' ',
  color: 'bg-red-badge text-white',
  size: 'default',
}
