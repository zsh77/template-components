import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Dropdown from './Dropdown'
import Button from 'Components/Button/Button'

export default {
  title: 'Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <div className="max-w-full min-h-[50vh] min-w-[350px] flex items-center justify-center">
    <Dropdown {...args}>
      {args.children || (
        <>
          {[
            { value: 'i1', label: 'آیتم شماره 1' },
            { value: 'i2', label: 'آیتم شماره 2' },
            { value: 'i3', label: 'آیتم شماره 3' },
            { value: 'i4', label: 'آیتم شماره 4' },
            { value: 'i5', label: 'آیتم شماره 5' },
            { value: 'i6', label: 'آیتم شماره 6' },
            { value: 'i7', label: 'آیتم شماره 7' },
          ].map((el) => (
            <div className="p-2 hover:bg-gray-300 cursor-pointer">
              {el.label}
            </div>
          ))}
        </>
      )}
    </Dropdown>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  triggerElement: <Button>دراپ داون</Button>,
}

export const sm = Template.bind({})
sm.args = {
  triggerElement: <Button>دراپ داون</Button>,
  size: 'sm',
}
export const md = Template.bind({})
md.args = {
  triggerElement: <Button>دراپ داون</Button>,
  size: 'md',
}

export const rtl = Template.bind({})
rtl.args = {
  triggerElement: <Button>دراپ داون</Button>,
  rtl: 'rtl',
}
export const ltr = Template.bind({})
ltr.args = {
  triggerElement: <Button>دراپ داون</Button>,
  dir: 'ltr',
}

export const Children = Template.bind({})
Children.args = {
  triggerElement: <Button>دراپ داون</Button>,
  dir: 'ltr',
  children: (
    <div className="text-center">
      <h1>this is a custom children</h1>
      <p>this is a p in the body of dropdown</p>
    </div>
  ),
}
