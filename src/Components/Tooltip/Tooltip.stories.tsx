import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Tooltip from './Tooltip'
import Button from 'Components/Button/Button'

export default {
  title: 'Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <div className="w-full min-h-[50vh] flex items-center justify-center">
    <Tooltip
      {...args}
      content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،"
    />
  </div>
)

export const Top = Template.bind({})
Top.args = {
  position: 'top',
  children: 'تولتیپ',
  childrenClassName: '',
}
export const Bottom = Template.bind({})
Bottom.args = {
  position: 'bottom',
  children: 'تولتیپ',
}

export const Right = Template.bind({})
Right.args = {
  position: 'right',
  children: 'تولتیپ',
}

export const Left = Template.bind({})
Left.args = {
  position: 'left',
  children: 'تولتیپ',
}

export const WithButton = Template.bind({})
WithButton.args = {
  position: 'bottom',
  children: <Button>تولتیپ</Button>,
}
