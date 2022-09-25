import { FunctionComponent, HTMLAttributes } from 'react'
import classJoin from 'Utils/classJoin'
import styles from './Backdrop.module.scss'

export interface IBackdropProps extends Omit<HTMLAttributes<Element>, 'id'> {
  open: boolean
  onClick: () => void
  variant?: 'transparent'
  className?: string
}

const Backdrop: FunctionComponent<IBackdropProps> = (props) => {
  const { open, onClick, variant, className } = props
  return (
    <>
      {open && (
        <div
          className={classJoin([
            styles.backdrop,
            variant && styles[variant],
            className,
          ])}
          onClick={onClick}
        />
      )}
    </>
  )
}

export default Backdrop
