import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TextField from './TextField'

export default {
  title: 'TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = (args) => (
  <div className="max-w-full min-h-[50vh] min-w-[350px] flex items-center justify-center">
    <TextField {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = { label: 'لیبل', id: 'adasd' }

export const Filled = Template.bind({})
Filled.args = { label: 'لیبل', variant: 'filled', id: 'adasd' }

export const Disabled = Template.bind({})
Disabled.args = { label: 'لیبل', variant: 'filled', disabled: true }

export const Error = Template.bind({})
Error.args = { label: 'لیبل', variant: 'filled', error: 'ایمیل صحیح نیست.' }

export const EndIcon = Template.bind({})
EndIcon.args = { label: 'لیبل', variant: 'filled', endIcon: 'icon' }
