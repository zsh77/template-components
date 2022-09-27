import { FC, InputHTMLAttributes } from 'react'

import Button from 'Components/Button/Button'
import styles from './Radio.module.scss'
import classJoin from 'Utils/classJoin'

type valueType = any
interface IRadioProps
  extends Omit<InputHTMLAttributes<Element>, 'checked' | 'name'> {
  className?: string
  name: string
  // value: valueType
  data: { value: valueType; label: string }[]
  // onChange?: (param0: valueType) => void
  variant?: 'default' | 'square' | 'button'
  labelClassName?: string
}

const Radio: FC<IRadioProps> = (props) => {
  const {
    data,
    value,
    onChange,
    variant,
    className,
    labelClassName,
    ...otherProps
  } = props

  return (
    <>
      {data.map((el, i) => {
        const isChecked = value === el.value

        const id = `${otherProps.name}_${el.value}`

        const inputRadio = (
          <input
            key={i}
            id={id}
            type="radio"
            onChange={() => {
              onChange(el.value)
            }}
            checked={isChecked}
            {...otherProps}
          />
        )
        return variant === 'button' ? (
          <Button
            variant={isChecked ? 'filled' : 'outlined'}
            color={isChecked ? 'secondary' : 'primary'}
            size="sm"
            className={classJoin([styles.radioButton, className])}
            key={i}
            onClick={() => {
              onChange(el.value)
            }}
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
              className,
            ])}
          >
            <input
              id={id}
              type="radio"
              checked={isChecked}
              onChange={() => {
                onChange(el.value)
              }}
              /* Hide the browser's default checkbox */
              className={'hidden'}
              {...otherProps}
              /**
               * no need to write this:
               * onChange={props.onChange}
               */
            />

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
      })}
    </>
  )
}

export default Radio
