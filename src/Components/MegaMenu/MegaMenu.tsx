import Backdrop from 'Components/Backdrop/Backdrop'
import scrollLock from 'Utils/scrollLock'
import React, { FC, ReactNode, useEffect } from 'react'
import classJoin from 'Utils/classJoin'

export interface IMegaMenuProps {
  className?: string
  isOpen?: boolean
  setIsOpen?: (param?) => void
  children: ReactNode
}

const MegaMenu: FC<IMegaMenuProps> = (props) => {
  const { className, isOpen, setIsOpen, children } = props

  useEffect(() => {
    scrollLock(isOpen)
  }, [isOpen])

  return (
    <>
      <Backdrop
        isOpen={isOpen}
        onClick={() => {
          setIsOpen(false)
        }}
        className={!isOpen ? 'hidden' : ''}
        variant="transparent"
      />
      <div
        className={classJoin([
          !isOpen ? 'hidden' : '',
          'w-full bg-gray-100 min-h-[200px] absolute right-0 top-[calc(100%+4px)] z-30 rounded-lg py-3 shadow-lg max-h-[calc(100vh-150px)] overflow-hidden',
          className,
        ])}
      >
        {children}
      </div>
    </>
  )
}

export default MegaMenu

MegaMenu.defaultProps = {}
