import React, { ChangeEvent } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TextField from './TextField'
import useState from 'storybook-addon-state'

export default {
  title: 'TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = (args) => {
  const [val, setVal] = useState('value', '')
  return (
    <div className="max-w-full min-h-[50vh] min-w-[350px] flex items-center justify-center flex-col">
      <TextField
        {...args}
        value={val}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value
          setVal(value)
        }}
      />
      <div>{val || ' '}</div>
    </div>
  )
}

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
