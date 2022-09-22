import { createElement, FC, InputHTMLAttributes, ReactNode } from 'react'
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
  endIcon?: string
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
            className: classJoin([
              styles.input,
              styles[variant + '-input'],
              error && styles.error,
              endIcon && styles.withEndIcon,
              elementClassName,
            ]),
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
        {endIcon && <div className={styles.endIcon}>v</div>}
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
