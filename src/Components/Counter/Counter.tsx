import { FC, HTMLAttributes } from 'react'
import Button, { IButtonProps } from 'Components/Button/Button'
import classJoin from 'Utils/classJoin'

import Icon from 'Components/Icon/Icon'

interface ICounterProps extends HTMLAttributes<Element> {
  count?: string | number
  buttonProps?: IButtonProps
  onReduce?: () => void
  onAdd?: () => void
  minusDisabled?: boolean
  plusDisabled?: boolean
}

const Counter: FC<ICounterProps> = (props) => {
  const { buttonProps, count, onAdd, onReduce, minusDisabled, plusDisabled } =
    props
  console.log(props)

  return (
    <Button
      {...buttonProps}
      variant={buttonProps.variant || 'outlined'}
      color={buttonProps.color || 'gray'}
      className={classJoin([
        buttonProps?.className,
        '!flex items-center !px-0',
      ])}
    >
      <Icon
        icon="+"
        onClick={!plusDisabled && onAdd}
        className={classJoin([
          'px-4',
          plusDisabled ? 'text-disabled' : 'text-primary',
        ])}
      />
      <div className="cursor-text text-black min-w-[15px]">{count}</div>
      <Icon
        icon="-"
        onClick={!minusDisabled && onReduce}
        className={classJoin([
          'px-4',
          minusDisabled ? 'text-disabled' : 'text-primary',
        ])}
      />
    </Button>
  )
}

export default Counter

Counter.defaultProps = {
  buttonProps: { color: 'gray', variant: 'outlined' },
  count: 1,
  plusDisabled: false,
  minusDisabled: false,
}
