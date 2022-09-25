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
Default.args = { label: 'چیپس' }

export const Color = Template.bind({})
Color.args = { label: 'چیپس', color: 'gray' }
