import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Radio from './Radio'
import useState from 'storybook-addon-state'

export default {
  title: 'Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (args) => {
  const [value, setValue] = useState('value', null)

  return (
    <div className="max-w-full min-h-[50vh] min-w-[350px] flex items-center justify-center">
      <Radio
        data={[
          { label: 'aaaa', value: 'aaaa' },
          { label: 'bbbb', value: 'bbbb' },
          { label: 'cccc', value: 'cccc' },
          { label: 'dddd', value: 'dddd' },
        ]}
        name="b456"
        value={value}
        onChange={setValue}
        {...args}
      />
    </div>
  )
}
export const Default = Template.bind({})
Default.args = {}

export const ButtonRadio = Template.bind({})
ButtonRadio.args = { variant: 'button' }

export const square = Template.bind({})
square.args = { variant: 'square' }
