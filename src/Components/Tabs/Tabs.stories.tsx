import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Tabs from './Tabs'
import useState from 'storybook-addon-state'
import classJoin from 'Utils/classJoin'

export default {
  title: 'Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = ({
  defaultChecked,
  ...args
}: any) => {
  const [value, setValue] = useState('value', null || defaultChecked)

  const d = (
    <div>
      {value + '\n'}
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five
    </div>
  )

  return (
    <Tabs
      value={value}
      {...args}
      onChange={(value, e) => {
        setValue(value)
        args.onChange?.(value, e)
      }}
      tabPanelComp={
        args.tabPanelComp ||
        {
          aaaa: d,
          bbbb: d,
          cccc: d,
          dddd: d,
        }[value] || <></>
      }
      tabList={
        args.tabList || [
          { label: 'aaaa', value: 'aaaa' },
          { label: 'bbbb', value: 'bbbb' },
          { label: 'cccc', value: 'cccc' },
          { label: 'dddd', value: 'dddd' },
        ]
      }
    />
  )
}

export const Underline = Template.bind({})
Underline.args = {
  tabListClassName: 'pb-3',
  tabPanelClassName: 'bg-gray-200 p-3',
  variant: 'button',
  defaultChecked: 'aaaa',
  hasUnderline: true,
  underlineClassName: '-mt-[14px]',
  buttonProps: (isChecked) => {
    return {
      variant: 'link',
      color: 'black',
      className: classJoin([
        '!ml-2 !px-7 border-b-2 !rounded-none border-transparent',
        isChecked && '!text-primary !border-primary',
      ]),
    }
  },
}

export const ScrollIntoView = Template.bind({})
ScrollIntoView.args = {
  tabListClassName: 'pb-3',
  tabPanelClassName: 'bg-gray-200 p-3',
  variant: 'button',
  defaultChecked: 'aaaa',
  hasUnderline: true,
  underlineClassName: '-mt-[14px]',
  onChange: (value, e) => {
    e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center' })
  },
  buttonProps: (isChecked) => {
    return {
      variant: 'link',
      color: 'black',
      className: classJoin([
        '!ml-2 !px-7 border-b-2 !rounded-none border-transparent',
        isChecked && '!text-primary !border-primary',
      ]),
    }
  },
}

export const Vertical = Template.bind({})
Vertical.args = {
  className: 'flex flex-col md:flex-row',
  tabListClassName: 'md:pb-0 md:justify-center md:block md:w-1/4',
  tabPanelClassName: 'md:w-3/4 bg-gray-200 rounded-l-md p-3',
  variant: 'button',
  defaultChecked: 'aaaa',
  buttonProps: (isChecked) => {
    return {
      className: classJoin([
        'md:h-16 md:w-full mb-1 md:last-of-type:!mb-0 md:!rounded-l-none md:!border-l-0 ml-1 md:ml-0',
        isChecked && 'md:!bg-gray-200 md:!border-gray-200 md:!text-black',
      ]),
    }
  },
}
