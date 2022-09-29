import React from 'react'
import { ComponentMeta } from '@storybook/react'

import ButtonGroup from './ButtonGroup'
import useState from 'storybook-addon-state'
import Icon from 'Components/Icon/Icon'

type typeOfButtonGroup = typeof ButtonGroup
interface ButtonGroupStory extends typeOfButtonGroup {
  defaultChecked?: any
  data?: any
}

export default {
  title: 'ButtonGroup',
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>

const Template = ({ defaultChecked, data, ...args }: ButtonGroupStory) => {
  const [value, setValue] = useState('value', null || defaultChecked)

  return (
    <div className="max-w-full min-h-[50vh] flex items-center justify-center">
      <ButtonGroup
        data={
          data
            ? data
            : [
                { label: 'aaaa', value: 'aaaa' },
                { label: 'bbbb', value: 'bbbb' },
                { label: 'cccc', value: 'cccc' },
                { label: 'dddd', value: 'dddd' },
              ]
        }
        name="b456"
        value={value}
        onChange={setValue}
        {...args}
      />
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {}

export const Secondary = Template.bind({})
Secondary.args = {
  buttonProps: (isChecked) => {
    return { color: isChecked ? 'secondary' : 'gray' }
  },
}

export const Gray = Template.bind({})
Gray.args = {
  buttonProps: () => {
    return { color: 'gray' }
  },
}

export const Sm = Template.bind({})
Sm.args = {
  buttonProps: () => {
    return { size: 'sm' }
  },
}

export const Md = Template.bind({})
Md.args = {
  buttonProps: () => {
    return { size: 'md' }
  },
}

export const Lg = Template.bind({})
Lg.args = {
  buttonProps: () => {
    return { size: 'lg' }
  },
}

export const icon = Template.bind({})
icon.args = {
  data: [
    { label: <Icon icon="x" />, value: 'aaaa' },
    { label: <Icon icon=">" />, value: 'bbbb' },
    { label: <Icon icon="<" />, value: 'cccc' },
    { label: <Icon icon="^" />, value: 'dddd' },
  ],
}

export const Disabled = Template.bind({})
Disabled.args = {
  data: [
    { label: <Icon icon="x" />, value: 'aaaa', disabled: true },
    { label: <Icon icon=">" />, value: 'bbbb' },
    { label: <Icon icon="<" />, value: 'cccc' },
    { label: <Icon icon="^" />, value: 'dddd' },
  ],
}
