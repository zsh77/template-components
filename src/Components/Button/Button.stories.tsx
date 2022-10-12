import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './Button'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Button',
  color: 'primary',
}
export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Button',
  color: 'secondary',
}
export const Gray = Template.bind({})
Gray.args = {
  children: 'Button',
  color: 'gray',
}
export const White = Template.bind({})
White.args = {
  children: 'Button',
  color: 'white',
}

export const Sm = Template.bind({})
Sm.args = {
  children: 'Button',
  size: 'sm',
}

export const Md = Template.bind({})
Md.args = {
  children: 'Button',
  size: 'md',
}

export const Lg = Template.bind({})
Lg.args = {
  children: 'Button',
  size: 'lg',
}

export const FullWidth = Template.bind({})
FullWidth.args = {
  children: 'Button',
  fullWidth: true,
}

export const Icon = Template.bind({})
Icon.args = {
  icon: 'x',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  children: 'Button',
  icon: 'x',
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Button',
  disabled: true,
}

export const IsLoading = Template.bind({})
IsLoading.args = {
  children: 'Button',
  isLoading: true,
  variant: 'filled',
}
