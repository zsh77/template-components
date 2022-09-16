import { FC, HTMLAttributes, ReactNode, useState } from 'react'

import Text from 'Components/Text/Text'
import classJoin from 'Utils/classJoin'
import styles from './Accordion.module.scss'

interface IAccordionProps extends Omit<HTMLAttributes<Element>, 'id'> {
  data?: {
    title: string | ReactNode
    text?: string | ReactNode
    icon?: string
    img?: string
    children?: ReactNode
  }[]
  id: string
  titleClassName?: string
  titleOpenClassName?: string
  bodyClassName?: string
  stayOpen?: boolean
  defaultOpenIndex?: string
}

const Accordion: FC<IAccordionProps> = (props) => {
  const {
    data,
    id,
    titleClassName,
    bodyClassName,
    stayOpen = false,
    defaultOpenIndex = '-1',
    titleOpenClassName,
  } = props

  const [selectedIndex, setSelectedIndex] = useState(
    defaultOpenIndex !== '-1' ? defaultOpenIndex : stayOpen ? `${id}-0` : '-1'
  )

  function toggleRadio(idx) {
    setSelectedIndex(selectedIndex === idx ? '-1' : idx)
  }

  return (
    <section id={id}>
      {data.map((el, i) => (
        <div key={`${id}-${i}`} className="border-b border-primary">
          <div
            className={[
              'm-0 flex align-center py-4 cursor-pointer',
              titleClassName,
              selectedIndex === `${id}-${i}` ? titleOpenClassName : '',
            ].join(' ')}
            onClick={() => toggleRadio(`${id}-${i}`)}
          >
            <Text>{el.title}</Text>

            <div className="flex flex-1" />

            {/* <BBIcon
              icon={`${
                selectedIndex === `${id}-${i}` ? 'up' : 'down'
              }_cheveron`}
              pl={2}
            /> */}
            <div>icon</div>
          </div>
          <input
            type="radio"
            className={classJoin(['hidden', styles.accordionRadio])}
            checked={selectedIndex === `${id}-${i}`}
            onClick={() => toggleRadio(`${id}-${i}`)}
          />
          <div
            className={classJoin([
              'max-h-0 overflow-hidden',
              styles.accordionBody,
              bodyClassName,
            ])}
          >
            {el?.text ? (
              <Text className="px-3" type="body2">
                {el.text}
              </Text>
            ) : (
              el?.children || ''
            )}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Accordion
