import { useState } from 'react'
import Tabs from 'Components/Tabs/Tabs'
import Button from 'Components/Button/Button'
import classJoin from 'Utils/classJoin'
import Icon from 'Components/Icon/Icon'

const TabButtonsExample = () => {
  const [value, setValue] = useState(null || 'aaaa')

  const d = (
    <div>
      {value}
      <br />
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five
    </div>
  )
  const a = [
    {
      label: 'aaaa',
      icon: 'grass',
      value: 'aaaa',
    },
    {
      label: 'bbbb',
      icon: 'flower',
      value: 'bbbb',
    },
    {
      label: 'cccc',
      icon: 'gift',
      value: 'cccc',
    },
    {
      label: 'dddd',
      icon: 'gift_card',
      value: 'dddd',
    },
  ].map((el) => {
    const { icon, ...restOfEl } = el
    const isChecked = el.value === value
    return {
      ...restOfEl,
      label: (
        <>
          <Button
            color={isChecked ? 'primary' : 'gray'}
            className={classJoin(['md:!bg-transparent md:!border-none'])}
            icon={icon}
            iconClassName="text-xl"
            iconColor={
              isChecked ? 'text-white md:!text-primary' : 'text-primary'
            }
          />
          {el.label}
        </>
      ),
    }
  })

  return (
    <Tabs
      name="tabButton"
      value={value}
      onChange={(value, e) => {
        setValue(value)
      }}
      tabPanelClassName="bg-gray-100 rounded-l-md p-3"
      variant="button"
      buttonProps={(isChecked) => {
        return {
          variant: 'link',
          className: classJoin([
            isChecked && '!rounded-none md:border-b-2 md:border-secondary',
          ]),
        }
      }}
      tabPanelComp={d}
      tabList={a}
    />
  )
}

export default TabButtonsExample
