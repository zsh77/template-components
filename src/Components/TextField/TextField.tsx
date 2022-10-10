import {
  createElement,
  FC,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
} from 'react'

import classJoin from 'Utils/classJoin'

import styles from './TextField.module.scss'

export interface ITextFieldProps
  extends Omit<InputHTMLAttributes<Element>, 'id'> {
  name?: string
  variant?: 'outlined' | 'filled'
  label?: ReactNode | string
  elementClassName?: string
  labelClassName?: string
  id: string
  element?: 'input' | 'textarea' | 'select'
  required?: boolean
  error?: boolean
  helpText?: string
  endIcon?: string | ReactElement
}

const TextField: FC<ITextFieldProps> = (props) => {
  const {
    variant,
    label,
    id,
    elementClassName,
    labelClassName,
    element,
    error,
    helpText,
    required,
    className,
    children,
    endIcon,
    value,
    disabled,
    ...otherProps
  } = props

  return (
    <div className={className}>
      <div className="relative">
        {createElement(
          element,
          {
            id,
            placeholder: ' ',
            value,
            className: classJoin([
              styles.input,
              !value && styles.empty,
              styles[variant + '-input'],
              error && styles.error,
              endIcon && styles.withEndIcon,
              disabled && styles.disabled,
              elementClassName,
            ]),
            disabled,
            ...otherProps,
          },
          element === 'select' ? children : null
        )}
        <label
          htmlFor={id}
          className={classJoin([
            styles.label,
            styles[variant + '-label'],
            labelClassName,
          ])}
        >
          {label + (required ? ' *' : '')}
        </label>
        {endIcon && <div className={styles.endIcon}>{endIcon}</div>}
      </div>

      <div className={styles.errorText}>{error || ''}</div>
    </div>
  )
}

export default TextField

TextField.defaultProps = {
  label: '',
  variant: 'outlined',
  element: 'input',
}
