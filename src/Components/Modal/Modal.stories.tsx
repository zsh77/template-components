import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import useState from 'storybook-addon-state'

import Button from 'Components/Button/Button'
import Modal, { IModalProps } from './Modal'

interface IModalStory extends IModalProps {
  stateName?: any
  label?: any
}

export default {
  title: 'Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args: IModalStory) => {
  const [state, setState] = useState('state', {
    isOpenLg: false,
    isOpenMd: false,
    isOpenSm: false,
    isopenTwoButtons: false,
  })
  const openDialog = (stateName) => {
    setState({ ...state, [stateName]: true })
  }
  const closeDialog = (stateName) => {
    setState({ ...state, [stateName]: false })
  }

  return (
    <>
      <Button
        onClick={() => {
          openDialog(args.stateName)
        }}
      >
        {args.label}
      </Button>
      <Modal
        isOpen={state[args.stateName]}
        hasClose
        size={args.size}
        onClose={() => closeDialog(args.stateName)}
        buttons={
          args.buttons || [
            {
              children: 'نه نه نه',
              onClick: () => closeDialog(args.stateName),
              color: 'primary',
              variant: 'outlined',
            },
            {
              children: 'باشه باشه',
              onClick: () => closeDialog(args.stateName),
              color: 'primary',
            },
          ]
        }
      >
        <div>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ کاربردهای متنوع با هدف بهبود ابزارهای
          کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
          شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت
          بیشتری را برای طراحان رایانه ای علی الخصوص طراحا علی الخصوص طراحان
          خلاقی، و فرهنگ کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
          کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
          متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
          رایانه ای علی الخصوص طراحا علی الخصوص طراحان خلاقی، و فرهنگ کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
          درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحا علی
          الخصوص طراحان خلاقی، و فرهنگ کاربردهای متنوع با هدف بهبود ابزارهای
          کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
          شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت
          بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
        </div>
      </Modal>
    </>
  )
}

export const Lg = Template.bind({})
Lg.args = {
  label: 'isOpenLg',
  stateName: 'isOpenLg',
  size: 'lg',
}

export const Md = Template.bind({})
Md.args = {
  label: 'isOpenMd',
  stateName: 'isOpenMd',
  size: 'md',
}

export const Sm = Template.bind({})
Sm.args = {
  label: 'isOpenSm',
  stateName: 'isOpenSm',
  size: 'sm',
}

export const Buttons = Template.bind({})
Buttons.args = {
  label: 'isopenTwoButtons',
  stateName: 'isopenTwoButtons',
  size: 'md',
  buttons: [
    {
      children: 'باتن',
      color: 'primary',
      variant: 'outlined',
    },
    {
      children: 'باتن',
      color: 'primary',
      variant: 'outlined',
    },
  ],
}
