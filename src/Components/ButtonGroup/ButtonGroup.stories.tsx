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
        {...args}
        name="b456"
        value={value}
        onChange={setValue}
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

export const DefaultChecked = Template.bind({})
DefaultChecked.args = {
  defaultChecked: 'bbbb',
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

export const iconV1 = Template.bind({})
iconV1.args = {
  data: [
    { icon: 'heart', value: 'aaaa' },
    { icon: 'flower', value: 'bbbb' },
    { icon: 'gift', value: 'cccc' },
    { icon: 'gift_card', value: 'dddd' },
  ],
  buttonProps: () => {
    return { iconClassName: 'text-lg !mr-0' }
  },
}

export const iconV2 = Template.bind({})
iconV2.args = {
  data: [
    { label: <Icon icon="heart" className="text-lg" />, value: 'aaaa' },
    { label: <Icon icon="flower" className="text-lg" />, value: 'bbbb' },
    { label: <Icon icon="gift" className="text-lg" />, value: 'cccc' },
    { label: <Icon icon="gift_card" className="text-lg" />, value: 'dddd' },
  ],
}

export const Disabled = Template.bind({})
Disabled.args = {
  data: [
    { label: 'aaaa', value: 'aaaa', disabled: true },
    { label: 'bbbb', value: 'bbbb' },
    { label: 'cccc', value: 'cccc' },
    { label: 'dddd', value: 'dddd' },
  ],
}
