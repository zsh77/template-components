import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Accordion from './Accordion'

export default {
  title: 'Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
)

export const Default = Template.bind({})
Default.args = {
  data: [
    {
      title: 'لورم ایپسوم',
      text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
    },
    {
      title: 'لورم ایپسوم',
      text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
    },
    {
      title: <p>لورم ایپسوم</p>,
      text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
    },
  ],
  id: 'uniq_id',
}
