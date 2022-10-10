import { FC, HTMLAttributes } from 'react'

import classJoin from 'Utils/classJoin'
import styles from './Tooltip.module.scss'

interface ITooltipProps extends HTMLAttributes<Element> {
  children
  content
  position?: 'top' | 'bottom' | 'right' | 'left'
  size?: 'md' | 'sm'
  childrenClassName?: string
  wrapperClassName?: string
}

const Tooltip: FC<ITooltipProps> = (props) => {
  const {
    position = 'top',
    content,
    children,
    childrenClassName,
    wrapperClassName,
  } = props

  return (
    <div className={classJoin(['relative', wrapperClassName])}>
      <div className={classJoin([styles.triggerEl, childrenClassName])}>
        {children}
      </div>

      <div className={classJoin([styles.tooltip, styles[position]])}>
        {content}
      </div>
    </div>
  )
}

export default Tooltip
