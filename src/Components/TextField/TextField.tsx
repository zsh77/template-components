import {
  createElement,
  FC,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
} from 'react'
import Icon from 'Components/Icon/Icon'
import classJoin from 'Utils/classJoin'

import styles from './TextField.module.scss'

export interface ITextFieldProps
  extends Omit<InputHTMLAttributes<Element>, 'id'> {
  label: ReactNode | string
  id: string
  name?: string
  variant?: 'outlined' | 'filled'
  elementClassName?: string
  labelClassName?: string
  iconClassName?: string
  element?: 'input' | 'textarea' | 'select'
  required?: boolean
  error?: string | boolean
  noError?: boolean
  helpText?: string
  icon?: string | ReactElement
}

const TextField: FC<ITextFieldProps> = (props) => {
  const {
    variant,
    label,
    id,
    elementClassName,
    labelClassName,
    iconClassName,
    element,
    error,
    noError,
    helpText,
    required,
    className,
    children,
    icon,
    value,
    disabled,
    ...otherProps
  } = props

  return (
    <div className={classJoin([styles.textfieldWrapper, className])}>
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
              icon && styles.withEndIcon,
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
            disabled && styles.disabled,
            labelClassName,
          ])}
        >
          {label + (required ? ' *' : '')}
        </label>
        {typeof icon === 'string' ? (
          <Icon
            icon={icon}
            className={classJoin([styles.endIcon, iconClassName])}
          />
        ) : (
          typeof icon !== 'undefined' && icon
        )}
      </div>

      {(!noError || error) && (
        <div className={styles.errorText}>{error || ''}</div>
      )}
    </div>
  )
}

export default TextField

TextField.defaultProps = {
  label: '',
  variant: 'outlined',
  element: 'input',
}
