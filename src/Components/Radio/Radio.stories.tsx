import React from 'react'
import Radio from './Radio'
import useState from 'storybook-addon-state'
import classJoin from 'Utils/classJoin'

export default {
  title: 'Radio',
  component: Radio,
}

type typeOfRadio = typeof Radio
interface RadioStory extends typeOfRadio {
  defaultChecked?: any
  data?: any[]
}

const Template = ({ defaultChecked, ...args }: RadioStory) => {
  const [value, setValue] = useState('value', null || defaultChecked)

  return (
    <div className="max-w-full min-h-[50vh] min-w-[350px] flex items-center justify-center">
      <>
        {Radio({
          data: args.data || [
            { label: 'aaaa', value: 'aaaa' },
            { label: 'bbbb', value: 'bbbb' },
            { label: 'cccc', value: 'cccc' },
            { label: 'dddd', value: 'dddd' },
          ],
          name: 'b456',
          value,
          onChange: setValue,
          ...args,
        })}
      </>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}

export const square = Template.bind({})
square.args = { variant: 'square' }

export const Button = Template.bind({})
Button.args = {
  variant: 'button',
  defaultChecked: 'aaaa',
  buttonProps: () => {
    return {
      className: classJoin(['ml-1']),
    }
  },
}

export const ButtonUnderline = Template.bind({})
ButtonUnderline.args = {
  variant: 'button',
  buttonProps: (isChecked) => {
    return {
      variant: 'link',
      color: 'black',
      className: classJoin([
        'border-b border-gray-300 !rounded-none !ml-0 !px-7',
        isChecked && '!border-primary !text-primary',
      ]),
    }
  },
}

export const disabled = Template.bind({})
disabled.args = {
  data: [
    { label: 'aaaa', value: 'aaaa', disabled: true },
    { label: 'bbbb', value: 'bbbb' },
    { label: 'cccc', value: 'cccc' },
    { label: 'dddd', value: 'dddd' },
  ],
  variant: 'square',
}

const VerticalTemplate = ({ defaultChecked, ...args }: RadioStory) => {
  const [value, setValue] = useState('value', null || defaultChecked)

  return (
    <div className="max-w-full min-h-[50vh] min-w-[350px] flex">
      <div className="flex items-center justify-center md:block md:w-1/4">
        {Radio({
          data: [
            { label: 'aaaa', value: 'aaaa' },
            { label: 'bbbb', value: 'bbbb' },
            { label: 'cccc', value: 'cccc' },
            { label: 'dddd', value: 'dddd' },
          ],
          name: 'b456',
          value,
          onChange: setValue,
          ...args,
        })}
      </div>
      <div className="w-3/4 bg-gray-200 rounded-l-md p-3">
        {value}
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
    </div>
  )
}

export const vertical = VerticalTemplate.bind({})
vertical.args = {
  defaultChecked: 'aaaa',
  variant: 'button',
  buttonProps: (isChecked) => {
    return {
      className: classJoin([
        'md:h-16 md:w-full md:mb-1 md:last-of-type:!mb-0 md:!rounded-l-none md:!border-l-0',
        isChecked && 'md:!bg-gray-200 md:!border-gray-200 md:!text-black',
      ]),
    }
  },
}
