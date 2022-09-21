import React, { FC, InputHTMLAttributes, ReactNode } from 'react'
import classJoin from 'Utils/classJoin'
import styles from './Switch.module.scss'

interface ISwitchProps extends Omit<InputHTMLAttributes<Element>, 'label'> {
  label: string | ReactNode
  // checked: boolean
  // onChange: () => void
}

const Switch: FC<ISwitchProps> = (props) => {
  const { id, label, ...otherProps } = props
  return (
    <div>
      <label
        htmlFor={id}
        className="inline-flex flex-row relative items-center cursor-pointer"
      >
        <input
          type="checkbox"
          className={classJoin(['sr-only peer', styles.checkbox])}
          id={id}
          {...otherProps}
        />
        <div className={styles.switch} />
        <span className={styles.label}>{label}</span>
      </label>
    </div>
  )
}

export default Switch

Switch.defaultProps = {}
