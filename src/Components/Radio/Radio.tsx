import { InputHTMLAttributes, ReactNode } from 'react'

import Button, { IButtonProps } from 'Components/Button/Button'
import styles from './Radio.module.scss'
import classJoin from 'Utils/classJoin'

export type dataType = {
  value: any
  label: string | ReactNode
  disabled?: boolean
}
export interface IRadioProps
  extends Omit<
    InputHTMLAttributes<Element>,
    'checked' | 'name' | 'defaultChecked'
  > {
  className?: string
  name: string
  data: dataType[]
  variant?: 'default' | 'square' | 'button'
  labelClassName?: string
  buttonProps?: (isChecked?: boolean) => IButtonProps | { className?: string }
}

const Radio: any = (props: IRadioProps) => {
  const {
    data = [],
    value,
    onChange,
    variant,
    className,
    labelClassName,
    buttonProps = () => {
      return { className: '' }
    },
    ...otherProps
  } = props

  return data.map((el, i) => {
    const isChecked = value === el.value

    const { className: buttonClassName, ...modifiedButtonProps } =
      variant === 'button' ? buttonProps(isChecked) : { className: '' }

    const id = `${otherProps.name}_${el.value}`

    const inputRadio = (
      <input
        key={i}
        id={id}
        type="radio"
        onChange={() => {
          !el.disabled && onChange(el.value)
        }}
        checked={isChecked}
        className="hidden"
        disabled={el.disabled}
        {...otherProps}
      />
    )

    return variant === 'button' ? (
      <Button
        variant={isChecked ? 'filled' : 'outlined'}
        color={isChecked ? 'primary' : 'gray'}
        size="sm"
        className={classJoin([styles.radioButton, buttonClassName, className])}
        key={i}
        disabled={el.disabled}
        onClick={() => {
          !el.disabled && onChange(el.value)
        }}
        {...modifiedButtonProps}
      >
        {inputRadio}
        {el.label}
      </Button>
    ) : (
      <label
        key={i}
        className={classJoin([
          styles.radioContainer,
          variant === 'square' && styles.variantRound,
          'user-select-none',
          el.disabled && styles.disabled,
          className,
        ])}
      >
        {inputRadio}

        <div
          className={classJoin([
            styles.tickBox,
            variant === 'square' && styles.variantSquare,
          ])}
        >
          <span className={styles.tick} />
        </div>

        <label htmlFor={id} className={classJoin(['mr-1', labelClassName])}>
          {el.label}
        </label>
      </label>
    )
  })
}

export default Radio
