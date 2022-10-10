import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Tooltip from './Tooltip'

export default {
  title: 'Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <div className="w-full min-h-[50vh] flex items-center justify-center">
    <Tooltip {...args} />
  </div>
)

export const Top = Template.bind({})
Top.args = {
  position: 'top',
  content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،',
  children: 'aaaa',
  childrenClassName: '',
}
export const Bottom = Template.bind({})
Bottom.args = {
  position: 'bottom',
  content:
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلک گرافیک است، چاپگرها و متون بلک گرافیک است، چاپگرها و متون بلکه روزنامه و',
  children: 'aaaa',
}

export const Right = Template.bind({})
Right.args = {
  position: 'right',
  content:
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلک گرافیک است، چاپگرها و متون بلک گرافیک است، چاپگرها و متون بلکه روزنامه و',
  children: 'aaaa',
}

export const Left = Template.bind({})
Left.args = {
  position: 'left',
  content:
    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلک گرافیک است، چاپگرها و متون بلک گرافیک است، چاپگرها و متون بلکه روزنامه و',
  children: 'aaaa',
}
