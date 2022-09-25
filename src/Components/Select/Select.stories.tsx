import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Select from './Select'

export default {
  title: 'Select',
  component: Select,
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => (
  <div className="max-w-full min-h-[50vh] min-w-[350px] flex items-center justify-center">
    <Select
      options={[
        { value: 'i1', label: 'آیتم شماره 1' },
        { value: 'i2', label: 'آیتم شماره 2' },
        { value: 'i3', label: 'آیتم شماره 3' },
        { value: 'i4', label: 'آیتم شماره 4' },
        { value: 'i5', label: 'آیتم شماره 5' },
        { value: 'i6', label: 'آیتم شماره 6' },
        { value: 'i7', label: 'آیتم شماره 7' },
      ]}
      onChange={console.log}
      {...args}
    />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  name: 'naaaam',
  label: 'لیبل',
  id: 'sadasd',
}

export const Native = Template.bind({})
Native.args = {
  name: 'naaaam',
  label: 'لیبل',
  native: true,
  id: 'dfdsfsds',
}

export const withValue = Template.bind({})
withValue.args = {
  name: 'naaaam',
  label: 'لیبل',
  native: true,
  id: 'dfdsfsds',
  value: 'i5',
}
