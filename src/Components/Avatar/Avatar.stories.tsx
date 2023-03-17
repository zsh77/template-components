import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Avatar from './Avatar'

export default {
  title: 'Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args} className="bg-secondary" />
)

export const Default = Template.bind({})
Default.args = {
  image: '',
}

export const Md = Template.bind({})
Md.args = {
  image: '',
  size: 'md',
}
