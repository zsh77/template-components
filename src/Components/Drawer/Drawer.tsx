import { FunctionComponent, HTMLAttributes, ReactNode } from 'react'
import Backdrop from 'Components/Backdrop/Backdrop'
import classJoin from 'Utils/classJoin'

interface IDrawerProps extends Omit<HTMLAttributes<Element>, 'className'> {
  onClose?: () => void
  isOpen: boolean
  placement?: 'right' | 'left' | 'bottom'
  children: ReactNode
  className?: (param0?) => string
  backdropClassName?: (param0?) => string
}

const Drawer: FunctionComponent<IDrawerProps> = (props) => {
  const {
    onClose,
    isOpen,
    children,
    placement,
    backdropClassName,
    className,
    ...otherProps
  } = props

  const getPlacement = () => {
    switch (placement) {
      case 'right':
        return {
          base: ['right-0', 'top-0'],
          active: ['transform-none'],
          inactive: ['translate-x-full'],
        }
      case 'bottom':
        return {
          base: ['bottom-0', 'left-0', 'right-0'],
          active: ['transform-none'],
          inactive: ['translate-y-full'],
        }
      case 'left':
        return {
          base: ['left-0', 'top-0'],
          active: ['transform-none'],
          inactive: ['-translate-x-full'],
        }
    }
  }

  return (
    <>
      <Backdrop
        isOpen={isOpen}
        onClick={onClose}
        className={classJoin([
          !isOpen && 'delay-200',
          backdropClassName(isOpen),
        ])}
      />
      <div
        className={classJoin([
          'fixed w-3/4 h-screen z-20 bg-white p-5 flex flex-col duration-300 transform overflow-y-auto',
          ...getPlacement().base,
          ...getPlacement()[isOpen ? 'active' : 'inactive'],
          className(isOpen),
          placement === 'bottom' && '!w-screen h-3/4',
        ])}
        {...otherProps}
      >
        {children}
      </div>
    </>
  )
}

export default Drawer

Drawer.defaultProps = {
  placement: 'right',
  className: () => '',
  backdropClassName: () => '',
}
