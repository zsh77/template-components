import React, { FC } from 'react'
import TextField, { ITextFieldProps } from 'Components/TextField/TextField'
import styles from './Textarea.module.scss'
import classJoin from 'Utils/classJoin'

export interface ITextareaProps extends Omit<ITextFieldProps, 'element'> {
  element: 'textarea'
}
const Textarea: FC<ITextareaProps> = (props) => {
  const { elementClassName, labelClassName, ...otherProps } = props
  return (
    <TextField
      element="textarea"
      elementClassName={classJoin([styles.textarea, elementClassName])}
      labelClassName={classJoin([styles.textarea_label, labelClassName])}
      {...otherProps}
    />
  )
}

export default Textarea
