import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Chips from './Chips'

export default {
  title: 'Chips',
  component: Chips,
} as ComponentMeta<typeof Chips>

const Template: ComponentStory<typeof Chips> = (args) => (
  <div className="max-w-full min-h-[50vh] min-w-[350px] flex items-center justify-center">
    <Chips {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = { label: 'chips' }

export const Color = Template.bind({})
Color.args = { label: 'chips', color: 'gray' }

export const Removable = Template.bind({})
Removable.args = {
  label: 'chips',
  color: 'gray',
  canRemove: true,
  className: 'px-2 !py-1 flex items-center',
  iconClassName: 'text-gray-550',
  onRemove: () => {},
}
