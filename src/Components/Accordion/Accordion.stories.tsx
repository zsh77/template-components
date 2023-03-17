import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Accordion from './Accordion'
import classJoin from 'Utils/classJoin'
import Button from 'Components/Button/Button'

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
  textClassName: 'pb-2',
}

export const Card = Template.bind({})
Card.args = {
  id: 'uniq_id',
  variant: 'custom',
  itemWrapperClassName: () => 'border !border-gray-400 rounded-md p-2',
  data: [
    ...[
      {
        orderNum: '12346KL568',
        date: '1400/06/12',
        button: (
          <Button variant="filled" color="primary">
            سفارش مجدد
          </Button>
        ),
        iconButton: <Button icon="delete" variant="link" color="gray" />,
      },
    ].map((el, i) => {
      return {
        titleComp: (toggle, isSelected) => (
          <>
            <div className="flex justify-between items-center">
              <div className="pr-2">{i + 1}</div>
              <div>{el.orderNum}</div>
              <div>{el.date}</div>
              <Button onClick={toggle} variant="link">
                {isSelected ? 'بستن جزییات' : 'مشاهده جزییات'}
              </Button>
              <div>{el.button}</div>
              <div>{el.iconButton}</div>
            </div>
          </>
        ),
        text: (
          <>
            <div
              className={classJoin(['border-b border-gray-400 pt-2 mb-2'])}
            />
            <div>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </div>
          </>
        ),
      }
    }),
  ],
}

export const FilterCard = Template.bind({})
FilterCard.args = {
  id: 'uniq_id',
  itemWrapperClassName: () => 'border !border-gray-400 rounded-md mb-2',
  titleClassName: 'bg-gray-300 p-2 py-2',
  bodyClassName: 'pb-0',
  data: [
    {
      title: 'محدوده فیلتر قیمت',
      text: (
        <>
          <div className={classJoin(['border-b border-gray-400'])} />
          <div className="p-2">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </div>
        </>
      ),
    },
    {
      title: 'محدوده فیلتر قیمت',
      text: (
        <>
          <div className={classJoin(['border-b border-gray-400'])} />
          <div className="p-2">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </div>
        </>
      ),
    },
  ],
}
