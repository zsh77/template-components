import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Counter from './Counter'
import useState from 'storybook-addon-state'

export default {
  title: 'Counter',
  component: Counter,
} as ComponentMeta<typeof Counter>

const Template: ComponentStory<typeof Counter> = (args) => {
  const [count, setCount] = useState('count', 1)

  return (
    <div className="max-w-full min-h-[50vh] min-w-[350px] flex items-center justify-center">
      <Counter
        {...args}
        onAdd={() => {
          console.log(count)
          setCount(count + 1)
        }}
        onReduce={() => {
          console.log(count)
          setCount(count - 1)
        }}
        minusDisabled={count <= 1}
        count={count}
      />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = { buttonProps: { color: 'gray' } }

const CustomTemplate: ComponentStory<typeof Counter> = (args) => {
  const [count, setCount] = useState('count', 1)
  const [isLoading, setIsLoading] = useState('isLoading', false)

  return (
    <div className="max-w-full min-h-[50vh] min-w-[350px] flex items-center justify-center">
      <Counter
        {...args}
        onAdd={() => {
          console.log(count)
          setIsLoading(true)
          setTimeout(() => {
            setCount(count + 1)
            setIsLoading(false)
          }, 2000)
        }}
        onReduce={() => {
          console.log(count)
          setIsLoading(true)
          setTimeout(() => {
            setCount(count - 1)
            setIsLoading(false)
          }, 2000)
        }}
        count={count}
        buttonProps={{ isLoading }}
      />
    </div>
  )
}

export const withTimeout = CustomTemplate.bind({})
withTimeout.args = { buttonProps: { color: 'gray' } }
