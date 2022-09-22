import React, { HTMLAttributes, useEffect } from 'react'
import styles from './Modal.module.scss'
import Button, { IButtonProps } from '../Button/Button'

import classJoin from 'Utils/classJoin'

export type SizeType = 'md' | 'sm' | 'lg'

export interface IModalProps extends HTMLAttributes<Element> {
  onClose: () => void
  isOpen: boolean
  buttons?: IButtonProps[]
  hasClose?: boolean
  size?: SizeType
  noPadding?: boolean
  className?: string
  bodyClassName?: string
  buttonsClassName?: string
}

function Modal(props: IModalProps): JSX.Element {
  const {
    children,
    onClose,
    isOpen,
    buttons,
    hasClose,
    size,
    className,
    bodyClassName,
    buttonsClassName,
  } = props

  useEffect(() => {
    isOpen
      ? typeof document !== 'undefined' &&
        (document.body.style.overflow = 'hidden')
      : typeof document !== 'undefined' &&
        (document.body.style.overflow = 'auto')
  }, [isOpen])

  return isOpen ? (
    <div
      className={classJoin([styles.wholeWindow, !isOpen ? styles.off : ''])}
      onClick={onClose}
    >
      <div
        className={classJoin([
          styles.modal,
          size ? styles[size] : '',
          className || '',
        ])}
        onClick={(e) => e.stopPropagation()}
      >
        {/* close button of modal */}
        {hasClose ? (
          <div className={styles.header}>
            <Button
              icon="close"
              onClick={onClose}
              className={styles.closeIcon}
              variant="link"
              size="small"
            />
          </div>
        ) : null}

        {/* body of modal */}
        <div className={classJoin([styles.body, bodyClassName || ''])}>
          {children}
        </div>

        {/* buttons of modal */}
        {buttons.length > 0 && (
          <div
            className={classJoin([styles.multipleButtons, buttonsClassName])}
          >
            {buttons.map((btnProps, i) => (
              <Button
                key={i}
                onClick={onClose}
                {...btnProps}
                className={classJoin([btnProps.className])}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  ) : (
    <></>
  )
}
export default Modal
Modal.defaultProps = {
  children: '',
  size: 'md',
}
