import { FC, HTMLAttributes, ReactElement, useState } from 'react'

import Backdrop from 'Components/Backdrop/Backdrop'
import classJoin from 'Utils/classJoin'
import styles from './Dropdown.module.scss'

interface IDropdownProps extends HTMLAttributes<Element> {
  dropdownClassName?: string
  triggerElement: ReactElement | string
  triggerElProps?: HTMLAttributes<Element>
  onOpen?: () => void
  onClose?: () => void
  dir?: 'ltr' | 'rtl'
  size?: 'sm' | 'md'
  fullPageInMobile?: boolean
}

const Dropdown: FC<IDropdownProps> = (props) => {
  const {
    dropdownClassName,
    triggerElement,
    triggerElProps,
    onClose,
    onOpen,
    dir,
    size,
    fullPageInMobile,
    className,
    children,
  } = props

  const [open, setOpen] = useState(false)

  const onClick = () => {
    if (open) onClose?.()
    else onOpen?.()

    setOpen(!open)
  }

  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <div className={classJoin(['relative', className])}>
      <div onClick={onClick} {...triggerElProps}>
        {triggerElement}
      </div>

      {open && (
        <>
          <Backdrop isOpen={open} onClick={closeMenu} variant="transparent" />
          <div
            className={classJoin([
              styles.dropdown,
              open ? styles.active : '',
              'customScrollbar',
              styles[dir],
              styles[size],
              fullPageInMobile && styles.fullPageInMobile,
              dropdownClassName,
            ])}
          >
            {children}
          </div>
        </>
      )}
    </div>
  )
}

export default Dropdown

Dropdown.defaultProps = { size: 'sm', dir: 'rtl' }
