import { cloneElement, FC, ReactElement, useEffect, useState } from 'react'
import TextField, { ITextFieldProps } from 'Components/TextField/TextField'
import classJoin from 'Utils/classJoin'
import styles from './Select.module.scss'

interface ISelectProps extends Omit<ITextFieldProps, 'onChange'> {
  options?: { value: string; label: string }[]
  optionListclassName?: string
  optionRender?: ReactElement
  native?: boolean
  onChange: (val: string) => void
}

const Select: FC<ISelectProps> = (props) => {
  const {
    className,
    optionListclassName,
    options,
    optionRender,
    native,
    value,
    onChange,
    ...otherProps
  } = props
  const [showOptions, setShowOptions] = useState(false)
  const [fieldValue, setFieldValue] = useState(value)

  const initialLabel =
    options.find((el) => el.value === (fieldValue || value))?.label || ''

  useEffect(() => {
    if (value !== fieldValue) setFieldValue(value)
  }, [value])

  const itemSelection = (e) => {
    e.stopPropagation()
    const val = native
      ? e.target.value
      : e?.target?.getAttribute('value') || value || ''
    setFieldValue(val)
    onChange?.(val)
  }

  const openMenu = () => {
    setShowOptions(true)
  }
  const closeMenu = () => {
    setShowOptions(false)
  }

  return (
    <div className={classJoin(['relative', className])}>
      <TextField
        readOnly
        endIcon={'down_cheveron'}
        elementClassName={styles.selectField}
        onChange={itemSelection}
        {...otherProps}
        {...(native
          ? {
              element: 'select',
              value: fieldValue,
              children: options.map((el, i) => (
                <option value={el.value} key={i}>
                  {el.label}
                </option>
              )),
            }
          : {
              element: 'input',
              value: initialLabel,
              onFocus: openMenu,
              onBlurCapture: closeMenu,
            })}
      ></TextField>

      {!native && (
        <div
          className={classJoin([
            styles.optionsList,
            optionListclassName,
            showOptions ? styles.active : '',
          ])}
        >
          {options.map((el, i) =>
            cloneElement(
              optionRender || <div className={styles.optionRender} />,
              {
                key: i,
                value: el.value,
                children: el.label,
                onClick: itemSelection,
              }
            )
          )}
        </div>
      )}
    </div>
  )
}

export default Select

Select.defaultProps = {}
