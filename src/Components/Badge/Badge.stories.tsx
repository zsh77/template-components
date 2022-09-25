import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Badge from './Badge'
import Button from 'Components/Button/Button'

export default {
  title: 'Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => (
  <div className="max-w-full min-h-[50vh] min-w-[350px] flex items-center justify-center">
    <Badge {...args}>
      <Button variant="filled" color="gray">
        باتن
      </Button>
    </Badge>
  </div>
)

export const Default = Template.bind({})
Default.args = { content: '2' }
