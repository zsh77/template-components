import { FC, ReactNode, useRef, useState } from 'react'
import Button, { IButtonProps } from 'Components/Button/Button'
import classJoin from 'Utils/classJoin'

import styles from './Collapse.module.scss'

interface ICollapseProps {
  containerClassName: string
  backOnClose?: boolean
  openedComp?: ReactNode
  closedComp?: ReactNode
  collapseButtonProps?: IButtonProps
  children: ReactNode
}

const Collapse: FC<ICollapseProps> = (props) => {
  const {
    children,
    containerClassName,
    backOnClose,
    openedComp,
    closedComp,
    collapseButtonProps,
  } = props
  const [isOpen, setIsOpen] = useState(false)
  const collapseElement = useRef<HTMLDivElement>()

  const checkAndUncheckRadio = () => {
    setIsOpen(!isOpen)
    if (backOnClose && isOpen) {
      setTimeout(() => {
        collapseElement?.current?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <div>
      <div
        className={classJoin([
          styles.collapseBody,
          isOpen && styles.open,
          containerClassName,
        ])}
        ref={collapseElement}
      >
        {children}
      </div>
      <div
        className={classJoin(['w-full flex items-center justify-center'])}
        onClick={checkAndUncheckRadio}
      >
        <Button
          variant="link"
          {...collapseButtonProps}
          icon={isOpen ? 'arrow_up_circle' : 'arrow_down_circle'}
          aria-label={isOpen ? 'close' : 'open'}
          iconClassName={classJoin([
            'text-primary',
            collapseButtonProps.iconClassName,
          ])}
          className={classJoin([
            'flex flex-col',
            collapseButtonProps.className,
          ])}
        >
          {isOpen
            ? openedComp || <span>see less</span>
            : closedComp || <span>see_more</span>}
        </Button>
      </div>
    </div>
  )
}

export default Collapse

Collapse.defaultProps = { collapseButtonProps: {} }
