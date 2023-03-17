import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Textarea from './Textarea'

export default {
  title: 'Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>

const Template: ComponentStory<typeof Textarea> = (args) => (
  <div className="max-w-full min-h-[50vh] min-w-[350px] flex items-center justify-center">
    <Textarea {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = { label: 'لیبل', id: 'adasd' }

export const Filled = Template.bind({})
Filled.args = { label: 'لیبل', variant: 'filled', id: 'adasd' }

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'لیبل',
  variant: 'filled',
  id: 'adasd',
  disabled: true,
}

export const Error = Template.bind({})
Error.args = {
  label: 'لیبل',
  variant: 'filled',
  id: 'adasd',
  error: 'ایمیل صحیح نیست.',
}

export const EndIcon = Template.bind({})
EndIcon.args = {
  label: 'لیبل',
  variant: 'filled',
  id: 'adasd',
  icon: 'arrow_down',
}
