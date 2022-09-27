import Text from 'Components/Text/Text'
import { FunctionComponent, InputHTMLAttributes } from 'react'
import classJoin from 'Utils/classJoin'

import styles from './Checkbox.module.scss'

interface ICheckboxProps extends Omit<InputHTMLAttributes<Element>, 'value'> {
  className?: string
  label?: string
  value?: boolean
  noHover?: boolean
  /**
   * otherProps is contained of property-values whose types are defined in InputHTMLAttributes
   */
}

const Checkbox: FunctionComponent<ICheckboxProps> = (props) => {
  const { label, className, value, checked, ...otherProps } = props

  return (
    <label
      className={classJoin([
        styles.checkboxContainer,
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
      <div className={styles.tickBox}>
        <span className={styles.tick} />
      </div>
      <Text className="mr-1">{props.label}</Text>
    </label>
  )
}

export default Checkbox
