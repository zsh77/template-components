import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Slider from './Slider'

export default {
  title: 'Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>

const Template: ComponentStory<typeof Slider> = (args) => {
  return (
    <div className="w-[400px] m-auto flex items-center justify-center">
      <Slider {...args} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = { className: 'w-[400px]' }
