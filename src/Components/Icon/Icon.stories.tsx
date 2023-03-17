import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Icon from './Icon'

export default {
  title: 'Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => {
  const iconList = [
    'arrow_right_circle',
    'arrow_down_circle',
    'arrow_left_circle',
    'arrow_up_circle',
    'arrow_left_long',
    'arrow_left',
    'arrow_right',
    'arrow_down',
    'arrow_up',
    'badges',
    'calendar_checked',
    'calendar',
    'cart',
    'category',
    'check',
    'clock_2',
    'clock',
    'credit_card_2',
    'database',
    'delete',
    'double_arrow_left',
    'download_photo',
    'edit_document',
    'enter',
    'exit',
    'download',
    'filter',
    'flower',
    'gift',
    'grass',
    'hamburger',
    'heart',
    'info_circle',
    'dislike',
    'like',
    'link',
    'verified_sign',
    'berries',
    'location_2',
    'location',
    'message',
    'open_folder',
    'phone_24',
    'phone',
    'verified_sign_2',
    'free_badge',
    'temperature',
    'credit_card',
    'watering_plant',
    'home_plant',
    'plant_pot',
    'four_season',
    'plant_sunshine',
    'plant',
    'plus_filled_circle',
    'purchase',
    'reminder_filled',
    'add_reminder',
    'reminder',
    'search',
    'share',
  ]
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

export const Xlarge = Template.bind({})
Xlarge.args = { size: 'text-xl' }

export const Color = Template.bind({})
Color.args = { color: 'text-red-error' }
