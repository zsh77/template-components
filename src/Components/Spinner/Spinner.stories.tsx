import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Spinner from 'Components/Spinner/Spinner'

export default {
  title: 'Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = (args) => (
  <div className="max-w-full min-h-[50vh] min-w-[350px] flex items-center justify-center">
    <Spinner {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {}

export const Small = Template.bind({})
Small.args = { size: 'w-5 h-5' }

export const Color = Template.bind({})
Color.args = { color: 'text-gray-200 fill-red-400' }
