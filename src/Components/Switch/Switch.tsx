import React, { ChangeEvent, FC, InputHTMLAttributes, ReactNode } from 'react'
import classJoin from 'Utils/classJoin'
import styles from './Switch.module.scss'

interface ISwitchProps extends Omit<InputHTMLAttributes<Element>, 'label'> {
  label?: string | ReactNode
  id: string
  checked?: boolean
  onChange: (e?: ChangeEvent<HTMLInputElement>) => void
  labelClassName?: string
}

const Switch: FC<ISwitchProps> = (props) => {
  const { id, label, labelClassName, className, ...otherProps } = props
  return (
    <label
      htmlFor={id}
      className={classJoin([
        'inline-flex flex-row relative items-center cursor-pointer',
        className,
      ])}
    >
      <input
        type="checkbox"
        className={classJoin(['sr-only', styles.checkbox])}
        id={id}
        {...otherProps}
      />
      <div className={styles.switch} />
      {label && (
        <span className={classJoin([styles.label, labelClassName])}>
          {label}
        </span>
      )}
    </label>
  )
}

export default Switch

Switch.defaultProps = {}
