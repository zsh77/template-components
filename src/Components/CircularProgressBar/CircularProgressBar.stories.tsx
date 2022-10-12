import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CircularProgressBar from './CircularProgressBar'
import Icon from 'Components/Icon/Icon'
import classJoin from 'Utils/classJoin'

export default {
  title: 'CircularProgressBar',
  component: CircularProgressBar,
} as ComponentMeta<typeof CircularProgressBar>

const Template: ComponentStory<typeof CircularProgressBar> = (args) => (
  <CircularProgressBar {...args} />
)

export const Default = Template.bind({})
Default.args = {
  percent: 40,
}

const CustomTemplate: ComponentStory<typeof CircularProgressBar> = (args) => {
  // const size = 2 * args.radius + 4 * args.strokeWidth //60px

  return (
    <div className="bg-rose-300 p-3 flex items-center justify-center">
      <div
        className={classJoin([
          'relative p-1 rounded-full bg-white ml-2',
          'w-[60px] h-[60px]',
        ])}
      >
        <CircularProgressBar {...args} />
        <Icon icon="x" className="absolute-center" />
      </div>
      {args.percent + '%'}
    </div>
  )
}

export const custom = CustomTemplate.bind({})
custom.args = {
  percent: 40,
  radius: 22,
  strokeWidth: 4,
}
