import React, { FC, HTMLAttributes, ReactElement, useState } from 'react'

import Backdrop from 'Components/Backdrop/Backdrop'
import classJoin from 'Utils/classJoin'
import styles from './Dropdown.module.scss'

interface IDropdownProps {
  className?: string
  children: any
  dropdownClassName?: string
  dropdownActiveClassName?: string
  triggerElement: ReactElement | string
  triggerElProps?: HTMLAttributes<Element>
  onOpen?: () => void
  onClose?: () => void
  dir?: 'ltr' | 'rtl' | 'center'
  size?: 'sm' | 'md'
  fullPageInMobile?: boolean
}

const Dropdown: FC<IDropdownProps> = (props) => {
  const {
    dropdownClassName,
    dropdownActiveClassName,
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
    onClose?.()
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
              ...(open && [styles.active, dropdownActiveClassName]),
              'customScrollbar',
              styles[dir],
              styles[size],
              fullPageInMobile && styles.fullPageInMobile,
              dropdownClassName,
            ])}
          >
            {children({ closeMenu })}
          </div>
        </>
      )}
    </div>
  )
}

export default Dropdown

Dropdown.defaultProps = { size: 'sm', dir: 'rtl' }
