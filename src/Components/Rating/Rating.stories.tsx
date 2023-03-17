import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Rating from './Rating'
import useState from 'storybook-addon-state'

export default {
  title: 'Rating',
  component: Rating,
} as ComponentMeta<typeof Rating>

const Template: ComponentStory<typeof Rating> = ({
  rate: argsRate,
  ...args
}) => {
  const [rate, setRate] = useState('rate', argsRate)
  return <Rating {...{ rate, setRate }} {...args} />
}

export const Default = Template.bind({})
Default.args = { rate: 3 }

export const ReadOnly = Template.bind({})
ReadOnly.args = { rate: 3, readOnly: true }
