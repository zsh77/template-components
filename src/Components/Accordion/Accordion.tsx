import { FC, HTMLAttributes, ReactNode, useState } from 'react'

import Text from 'Components/Text/Text'
import classJoin from 'Utils/classJoin'
import styles from './Accordion.module.scss'
import Icon from 'Components/Icon/Icon'

interface IAccordionProps extends Omit<HTMLAttributes<Element>, 'id'> {
  data?: {
    title: string | ReactNode
    text?: string | ReactNode
    icon?: string
    img?: string
    children?: ReactNode
    titleComp?: (param0, param1?) => void
  }[]
  id: string
  titleClassName?: string
  titleOpenClassName?: string
  itemWrapperClassName?: string
  bodyClassName?: string
  stayOpen?: boolean
  defaultOpenIndex?: string
  variant?: 'default' | 'custom'
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
    itemWrapperClassName,
    variant,
    className,
  } = props

  const [selectedIndex, setSelectedIndex] = useState(
    defaultOpenIndex !== '-1' ? defaultOpenIndex : stayOpen ? `${id}-0` : '-1'
  )

  function toggleRadio(idx) {
    setSelectedIndex(selectedIndex === idx ? '-1' : idx)
  }

  return (
    <section id={id} className={className}>
      {data.map((el, i) => (
        <div
          key={`${id}-${i}`}
          className={classJoin([
            'border-b border-primary overflow-hidden',
            itemWrapperClassName,
          ])}
        >
          {variant === 'default' ? (
            <div
              className={classJoin([
                'm-0 flex align-center py-4 cursor-pointer',
                titleClassName,
                selectedIndex === `${id}-${i}` && titleOpenClassName,
              ])}
              onClick={() => toggleRadio(`${id}-${i}`)}
            >
              <Text>{el.title}</Text>
              <div className="flex flex-1" />
              <Icon
                icon={selectedIndex === `${id}-${i}` ? '^' : 'v'}
                className="pl-2"
              />
            </div>
          ) : variant === 'custom' ? (
            <>
              {el.titleComp(
                () => toggleRadio(`${id}-${i}`),
                selectedIndex === `${id}-${i}`
              )}
            </>
          ) : null}

          <div
            className={classJoin([
              styles.accordionBody,
              selectedIndex === `${id}-${i}` && styles.open,
              bodyClassName,
            ])}
          >
            {el?.text ? (
              <Text className="px-3">{el.text}</Text>
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

Accordion.defaultProps = { variant: 'default' }
