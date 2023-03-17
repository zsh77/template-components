import { Fragment, InputHTMLAttributes, ReactNode, createElement } from 'react'
import Button, { IButtonProps } from 'Components/Button/Button'
import styles from './Radio.module.scss'
import classJoin from 'Utils/classJoin'

export type dataType = {
  value: any
  label: string | ReactNode
  disabled?: boolean
  icon?: string
  startIcon?: string
}

export interface IRadioProps
  extends Omit<
    InputHTMLAttributes<Element>,
    'checked' | 'name' | 'defaultChecked' | 'value' | 'onChange'
  > {
  className?: string
  name: string
  value: string | number
  data: dataType[]
  variant?: 'default' | 'square' | 'button' | 'circle'
  labelClassName?: string
  onChange: (val?, e?) => void
  buttonProps?: (isChecked?: boolean) => IButtonProps | undefined
  labelTagName?: string
}

const Radio: any = (props: IRadioProps) => {
  const {
    data = [],
    value,
    onChange,
    variant,
    className,
    labelClassName,
    labelTagName,
    buttonProps = () => {
      return { className: '' }
    },
    ...otherProps
  } = props

  return data.map((el, i) => {
    const isChecked = (value || value === 0) && value === el.value

    const id = `${otherProps.name}_${el.value}`

    const inputRadio = (
      <input
        key={i}
        id={id}
        type="radio"
        onChange={(e) => {
          !el.disabled && onChange(el.value, e)
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
        key={i}
        disabled={el.disabled}
        onClick={(e) => {
          !el.disabled && onChange(el.value, e)
        }}
        icon={el?.icon}
        startIcon={el?.startIcon}
        {...buttonProps(isChecked)}
        className={classJoin([
          styles.radioButton,
          className,
          buttonProps(isChecked).className,
        ])}
      >
        {inputRadio}
        {createElement(labelTagName || Fragment, {}, el.label)}
      </Button>
    ) : (
      <label
        key={i}
        className={classJoin([
          styles.radioContainer,
          variant === 'circle' && styles.variantCircle,
          variant === 'square' && styles.variantRound,
          'user-select-none',
          el.disabled && styles.disabled,
          labelClassName,
        ])}
      >
        {inputRadio}

        <div
          className={classJoin([
            styles.tickBox,
            variant === 'circle' && styles.variantCircle,
            variant === 'square' && styles.variantSquare,
          ])}
        >
          <span className={styles.tick} />
        </div>

        {el.label}
      </label>
    )
  })
}

export default Radio

Radio.defaultProps = { className: '', variant: 'default' }
