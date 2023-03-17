import { FC, ReactNode, createElement, useState } from 'react'
import classJoin from 'Utils/classJoin'
import styles from './Accordion.module.scss'
import Icon from 'Components/Icon/Icon'

export interface IAccordionProps {
  data?: {
    title: string | ReactNode
    text?: string | ReactNode
    icon?: string
    iconClassName?: string
    img?: string
    children?: ReactNode
    titleComp?: (param0, param1?) => void
  }[]
  id?: string
  titleClassName?: string
  titleOpenClassName?: string
  textClassName?: string
  itemWrapperClassName?: (param?) => string
  bodyClassName?: string
  openBodyClassName?: string
  container?: string
  className?: string
  stayOpen?: boolean
  defaultOpenIndex?: string
  variant?: 'default' | 'custom'
  titleTagName?: string
  onClickTitle?: (param?) => void
}

const Accordion: FC<IAccordionProps> = (props) => {
  const {
    data,
    id,
    titleClassName,
    bodyClassName,
    stayOpen,
    defaultOpenIndex,
    titleOpenClassName,
    textClassName,
    itemWrapperClassName,
    variant,
    className,
    container,
    openBodyClassName,
    titleTagName,
    onClickTitle,
  } = props

  const [selectedIndex, setSelectedIndex] = useState(defaultOpenIndex)

  const toggleRadio = (idx) => {
    setSelectedIndex((prev) => {
      return prev.includes(idx)
        ? prev.replace(idx, '')
        : stayOpen
        ? prev + ' ' + idx
        : idx
    })
  }

  const isOpen = (id, i) => selectedIndex.includes(`${id}-${i}`)

  return (
    <section id={id} className={classJoin([className, container])}>
      {data.map((el, i) => {
        return (
          <div
            key={`${id}-${i}`}
            className={classJoin([
              'border-b border-primary overflow-hidden',
              itemWrapperClassName?.(isOpen(id, i)),
            ])}
          >
            {variant === 'default' ? (
              createElement(
                titleTagName || 'div',
                {
                  className: classJoin([
                    'm-0 flex items-center py-4 pr-3 cursor-pointer',
                    titleClassName,
                    isOpen(id, i) && titleOpenClassName,
                  ]),
                  onClick: () => {
                    toggleRadio(`${id}-${i}`)
                    onClickTitle?.(i)
                  },
                },
                <>
                  {el.icon && (
                    <Icon
                      icon={el.icon}
                      className={classJoin(['ml-2', el.iconClassName])}
                    />
                  )}
                  {el.title}
                  <div className="flex flex-1" />
                  <Icon
                    icon={isOpen(id, i) ? 'arrow_up' : 'arrow_down'}
                    className="px-2"
                  />
                </>
              )
            ) : variant === 'custom' ? (
              <>
                {el.titleComp(() => toggleRadio(`${id}-${i}`), isOpen(id, i))}
              </>
            ) : null}

            <div
              className={classJoin([
                styles.accordionBody,
                isOpen(id, i) && classJoin([styles.open, openBodyClassName]),
                bodyClassName,
              ])}
            >
              {el?.text ? (
                <div className={classJoin(['px-3', textClassName])}>
                  {el.text}
                </div>
              ) : (
                el?.children || ''
              )}
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Accordion

Accordion.defaultProps = {
  variant: 'default',
  defaultOpenIndex: '-1',
  stayOpen: false,
}
