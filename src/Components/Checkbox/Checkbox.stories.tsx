import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import useState from 'storybook-addon-state'
import Checkbox from './Checkbox'

export default {
  title: 'Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => {
  const [checked, setChecked] = useState<boolean>(
    'checked',
    args.defaultChecked || false
  )

  return (
    <div className="max-w-full min-h-[50vh] min-w-[350px] flex items-center justify-center">
      <Checkbox
        label="checkbox"
        checked={checked}
        onChange={() => {
          setChecked(!checked)
        }}
        {...args}
      />
    </div>
  )
}
export const Default = Template.bind({})
Default.args = {}

export const defaultChecked = Template.bind({})
defaultChecked.args = { defaultChecked: true }

export const variantRound = Template.bind({})
variantRound.args = { variant: 'round' }
