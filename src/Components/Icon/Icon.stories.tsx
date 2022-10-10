import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Icon from './Icon'

export default {
  title: 'Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => {
  const iconList = ['x', 'v', '^']
  return (
    <div className="max-w-full min-h-[50vh] min-w-[350px] flex items-center justify-center flex-wrap">
      {iconList.map((el) => (
        <div className="mr-2 p-2 bg-rose-300 text-center">
          <Icon {...args} icon={el} />
          <div>{el}</div>
        </div>
      ))}
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}

export const Small = Template.bind({})
Small.args = { size: 'text-xs' }

export const Color = Template.bind({})
Color.args = { color: 'text-red-400' }
