import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Drawer from './Drawer'
import useState from 'storybook-addon-state'
import Button from 'Components/Button/Button'

export default {
  title: 'Drawer',
  component: Drawer,
} as ComponentMeta<typeof Drawer>

const Template: ComponentStory<typeof Drawer> = (args) => {
  const [isOpen, setIsOpen] = useState('isOpen', false)
  return (
    <>
      <Button
        onClick={() => {
          setIsOpen(true)
        }}
      >
        دراور
      </Button>
      <Drawer
        {...args}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false)
        }}
        children={
          <div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>links</div>
            <div>links</div>
            <div>links</div>
            <div>links</div>
            <div>links</div>
            <div>links</div>
            <div>links</div>
            <div>Contact Us</div>
            <div>Contact Us</div>
            <div>Contact Us</div>
            <div>Contact Us</div>
            <div>Contact Us</div>
            <div>Terms of Service</div>
            <div>Terms of Service</div>
            <div>Terms of Service</div>
            <div>Terms of Service</div>
          </div>
        }
      />
    </>
  )
}

export const Default = Template.bind({})
Default.args = {}
