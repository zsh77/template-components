import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Icon from './Icon'

export default {
  title: 'Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => (
  <div className="max-w-full min-h-[50vh] min-w-[350px] flex items-center justify-center">
    <Icon {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = { icon: 'x' }

export const Small = Template.bind({})
Small.args = { icon: 'x', size: 'text-xs' }

export const Color = Template.bind({})
Color.args = { icon: 'x', color: 'text-red-400' }
