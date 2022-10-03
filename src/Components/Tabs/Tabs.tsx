import React, { FC, ReactNode } from 'react'
import Radio, { IRadioProps } from 'Components/Radio/Radio'
import classJoin from 'Utils/classJoin'

export interface ITabsProps extends Omit<IRadioProps, 'data'> {
  className?: string
  tabListClassName?: string
  tabPanelClassName?: string
  tabList?: {
    value: any
    label: string | ReactNode | any
    disabled?: boolean
  }[]
  tabPanelComp?: string | ReactNode
  hasUnderline?: boolean
  underlineClassName?: string
}

const Tabs: FC<ITabsProps> = (props) => {
  const {
    className,
    tabListClassName,
    tabPanelClassName,
    tabList,
    tabPanelComp,
    name,
    value,
    onChange,
    variant,
    buttonProps,
    hasUnderline,
    underlineClassName,
  } = props

  return (
    <div className={classJoin([className])}>
      <div
        className={classJoin([
          'flex items-center overflow-auto',
          tabListClassName,
        ])}
      >
        {Radio({
          data: tabList,
          name,
          value,
          onChange,
          variant,
          buttonProps: (isChecked) => {
            return {
              ...buttonProps(isChecked),
              className: classJoin([
                'shrink-0',
                buttonProps(isChecked).className,
              ]),
            }
          },
        })}
      </div>
      {hasUnderline && (
        <div
          className={classJoin([
            'w-full h-0 border-b-2 border-gray-300',
            underlineClassName,
          ])}
        />
      )}
      <div className={classJoin([tabPanelClassName])}>{tabPanelComp}</div>
    </div>
  )
}

export default Tabs

Tabs.defaultProps = { tabPanelComp: <></> }
