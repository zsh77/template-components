import React, { ReactNode, useEffect } from 'react'
import styles from './Modal.module.scss'
import Button, { IButtonProps } from '../Button/Button'
import classJoin from 'Utils/classJoin'
import Backdrop from 'Components/Backdrop/Backdrop'
import scrollLock from 'Utils/scrollLock'

export type SizeType = 'md' | 'sm' | 'lg'

export interface IModalProps {
  onClose: () => void
  isOpen: boolean
  children: ReactNode | ReactNode[]
  buttons?: IButtonProps[]
  hasClose?: boolean
  size?: SizeType
  noPadding?: boolean
  className?: string
  bodyClassName?: string
  buttonsClassName?: string
  header?: ReactNode
  headerClassName?: string
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
    header,
    headerClassName,
  } = props

  useEffect(() => {
    scrollLock(isOpen)
  }, [isOpen])

  return isOpen ? (
    <>
      <Backdrop isOpen={isOpen} onClick={onClose} />

      <div
        className={classJoin([
          styles.modal,
          size && styles[size],
          isOpen && styles.open,
          'absolute-center',
          className,
        ])}
      >
        {/* close button of modal */}
        {hasClose ? (
          <div className={styles.header}>
            <Button
              icon="x"
              aria-label="close-modal"
              color="gray"
              onClick={onClose}
              className="mr-auto !min-w-0"
              variant="link"
              element="button"
              size="sm"
            />
          </div>
        ) : null}

        {/* sticky header for modal */}
        {header ? (
          <div
            className={classJoin([
              'p-3 pb-0 md:p-5 md:py-3 rounded-t-lg',
              headerClassName,
            ])}
          >
            {header}
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
    </>
  ) : (
    <></>
  )
}
export default Modal
Modal.defaultProps = {
  children: '',
  size: 'md',
  buttons: [],
}
