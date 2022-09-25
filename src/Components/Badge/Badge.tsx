import { FunctionComponent, HTMLAttributes, ReactElement } from 'react'
import classJoin from 'Utils/classJoin'

import styles from './Badge.module.scss'

interface IBadgeProps extends HTMLAttributes<Element> {
  children?: ReactElement
  content?: string
  color?: string
}

const Badge: FunctionComponent<IBadgeProps> = (props) => {
  const { content, color, children } = props

  return (
    <div className={styles.wrapper}>
      <div className={classJoin([styles.badge, color])}>{content}</div>
      {children}
    </div>
  )
}

export default Badge

Badge.defaultProps = { content: ' ', color: 'bg-red-badge text-white' }
