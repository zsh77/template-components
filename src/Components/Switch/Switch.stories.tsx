import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Switch from 'Components/Switch/Switch'

export default {
  title: 'Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>

const Template: ComponentStory<typeof Switch> = (args) => (
  <div className="max-w-full min-h-[50vh] min-w-[350px] flex items-center justify-center">
    <Switch {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {}

export const Checked = Template.bind({})
Checked.args = { checked: true }

export const Label = Template.bind({})
Label.args = { label: 'لیبل' }
