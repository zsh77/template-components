import Button from 'Components/Button/Button'
import { FunctionComponent, HTMLAttributes, useRef, useState } from 'react'
import classJoin from 'Utils/classJoin'

import styles from './Collapse.module.scss'

interface ICollapseProps extends HTMLAttributes<Element> {
  containerClassName: string
  backOnClose?: boolean
}

const Collapse: FunctionComponent<ICollapseProps> = (props) => {
  const { children, containerClassName, backOnClose } = props
  const [isOpen, setIsOpen] = useState(false)
  const collapseElement = useRef<HTMLDivElement>()

  const checkAndUncheckRadio = () => {
    setIsOpen(!isOpen)
    if (backOnClose && isOpen) {
      setTimeout(() => {
        collapseElement?.current?.scrollIntoView()
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
        <Button variant="link" icon={isOpen ? '^' : 'v'} size="sm">
          {isOpen ? <span>کمتر</span> : <span>بیشتر</span>}
        </Button>
      </div>
    </div>
  )
}

export default Collapse
