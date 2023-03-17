import { FC } from 'react'
import Button, { IButtonProps } from 'Components/Button/Button'
import classJoin from 'Utils/classJoin'
import Icon from 'Components/Icon/Icon'

interface ICounterProps {
  count?: string | number
  buttonProps?: IButtonProps
  onReduce?: () => void
  onAdd?: () => void
  minusDisabled?: boolean
  plusDisabled?: boolean
  hasDelete?: boolean
}

const Counter: FC<ICounterProps> = (props) => {
  const {
    buttonProps,
    count,
    onAdd,
    onReduce,
    minusDisabled,
    plusDisabled,
    hasDelete,
  } = props

  return (
    <Button
      {...buttonProps}
      variant={buttonProps.variant || 'outlined'}
      color={buttonProps.color || 'gray'}
      className={classJoin([
        buttonProps?.className,
        '!flex items-center !px-0 !py-0 !bg-gray-100 border-gray-600',
      ])}
    >
      <div
        onClick={!plusDisabled ? onAdd : () => {}}
        className={classJoin([
          'px-4 text-2xl pt-1.5',
          plusDisabled ? 'text-disabled cursor-not-allowed' : 'text-primary',
        ])}
      >
        +
      </div>
      <div className="cursor-text text-dark-text min-w-[15px] pt-1.5">
        {count}
      </div>
      <div
        onClick={!minusDisabled ? onReduce : () => {}}
        className={classJoin([
          'px-4 text-2xl',
          minusDisabled ? 'text-disabled cursor-not-allowed' : 'text-primary',
          hasDelete && count === 1 ? 'pt-0' : 'pt-1.5',
        ])}
      >
        {hasDelete && count === 1 ? (
          <Icon icon="delete" className="text-sm" />
        ) : (
          '-'
        )}
      </div>
    </Button>
  )
}

export default Counter

Counter.defaultProps = {
  buttonProps: { color: 'gray', variant: 'outlined' },
  count: 1,
  plusDisabled: false,
  minusDisabled: false,
  hasDelete: true,
}
