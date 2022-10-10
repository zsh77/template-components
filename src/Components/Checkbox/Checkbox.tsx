import { FunctionComponent, InputHTMLAttributes } from 'react'
import classJoin from 'Utils/classJoin'

import styles from './Checkbox.module.scss'

interface ICheckboxProps extends Omit<InputHTMLAttributes<Element>, 'value'> {
  className?: string
  label?: string
  value?: boolean
  variant?: 'default' | 'round'
  labelClassName?: string
  /**
   * otherProps is contained of property-values whose types are defined in InputHTMLAttributes
   */
}

const Checkbox: FunctionComponent<ICheckboxProps> = (props) => {
  const {
    label,
    className,
    value,
    checked,
    variant,
    labelClassName,
    ...otherProps
  } = props

  return (
    <label
      className={classJoin([
        styles.checkboxContainer,
        variant === 'round' && styles.variantRound,
        'user-select-none',
        className,
      ])}
    >
      <input
        type="checkbox"
        checked={typeof checked !== 'undefined' ? checked : value}
        /* Hide the browser's default checkbox */
        className={'hidden'}
        {...otherProps}
        /**
         * no need to write this:
         * checked={props.checked}
         * onChange={props.onChange}
         */
      />
      <div
        className={classJoin([
          styles.tickBox,
          variant === 'round' && styles.variantRound,
        ])}
      >
        <span className={styles.tick} />
      </div>
      <div className={classJoin(['mr-1', labelClassName])}>{props.label}</div>
    </label>
  )
}

export default Checkbox

Checkbox.defaultProps = { variant: 'default' }
