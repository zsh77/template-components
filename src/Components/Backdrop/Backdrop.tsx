import { FC } from 'react'
import classJoin from 'Utils/classJoin'
import styles from './Backdrop.module.scss'

export interface IBackdropProps {
  isOpen: boolean
  onClick: () => void
  variant?: 'transparent'
  className?: string
}

const Backdrop: FC<IBackdropProps> = (props) => {
  const { isOpen, onClick, variant, className } = props
  return (
    <div
      className={classJoin([
        styles.backdrop,
        isOpen && styles.isOpen,
        variant && styles[variant],
        className,
      ])}
      onClick={onClick}
    />
  )
}

export default Backdrop
