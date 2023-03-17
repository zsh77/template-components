import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Carousel from './Carousel'

export default {
  title: 'Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>

const Template: ComponentStory<typeof Carousel> = (args) => (
  <div className="min-h-screen">
    <Carousel
      {...args}
      data={['1', '2', '3', '4', '5', '6', '7', '8', '9']}
      margin={8}
      components={(data) => (
        <div className="w-[200px] h-[150px] md:w-[300px] bg-secondary ml-2">
          {data}
        </div>
      )}
    />
  </div>
)

export const Default = Template.bind({})
Default.args = {}

export const Autoplay = Template.bind({})
Autoplay.args = { autoPlay: true }

export const TimeOut = Template.bind({})
TimeOut.args = { autoPlay: true, timeout: 500 }
