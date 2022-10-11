import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Backdrop, { IBackdropProps } from './Backdrop'
import Button from 'Components/Button/Button'
import useState from 'storybook-addon-state'

interface IBackdropStory extends IBackdropProps {
  stateName?: string
}
export default {
  title: 'Backdrop',
  component: Backdrop,
} as ComponentMeta<typeof Backdrop>

const Template: ComponentStory<typeof Backdrop> = (args: IBackdropStory) => {
  const [state, setState] = useState('state', {
    default: false,
    transparent: false,
  })
  const openDialog = (stateName) => {
    setState({ ...state, [stateName]: true })
  }
  const closeDialog = (stateName) => {
    setState({ ...state, [stateName]: false })
  }

  return (
    <div className="max-w-full min-h-[50vh] min-w-[350px] flex items-center justify-center">
      <Button
        onClick={() => {
          openDialog(args.stateName)
        }}
      >
        {args.stateName}
      </Button>
      <Backdrop
        {...args}
        isOpen={state[args.stateName]}
        onClick={() => closeDialog(args.stateName)}
      />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = { stateName: 'default' }

export const transparent = Template.bind({})
transparent.args = { variant: 'transparent', stateName: 'transparent' }
