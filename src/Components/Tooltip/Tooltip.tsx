import { FC } from 'react'
import classJoin from 'Utils/classJoin'
import styles from './Tooltip.module.scss'

interface ITooltipProps {
  children
  content
  position?: 'top' | 'bottom' | 'right' | 'left'
  size?: 'md' | 'sm'
  childrenClassName?: string
  wrapperClassName?: string
  contentClassName?: string
  dir?: 'rtl' | 'ltr' | 'center'
}

const Tooltip: FC<ITooltipProps> = (props) => {
  const {
    position = 'top',
    content,
    children,
    childrenClassName,
    wrapperClassName,
    contentClassName,
    dir,
  } = props

  return (
    <div className={classJoin(['relative', wrapperClassName])}>
      <div className={classJoin([styles.triggerEl, childrenClassName])}>
        {children}
      </div>

      <div
        className={classJoin([
          styles.tooltip,
          styles[position],
          styles[dir],
          contentClassName,
        ])}
      >
        {content}
      </div>
    </div>
  )
}

export default Tooltip
Tooltip.defaultProps = { position: 'top', dir: 'ltr' }
