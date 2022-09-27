import { cloneElement, FC, ReactElement, useEffect, useState } from 'react'
import TextField, { ITextFieldProps } from 'Components/TextField/TextField'
import classJoin from 'Utils/classJoin'
import styles from './Select.module.scss'
import Icon from 'Components/Icon/Icon'

interface ISelectProps extends Omit<ITextFieldProps, 'onChange' | 'id'> {
  id: string
  options?: { value: string; label: string }[]
  optionListClassName?: string
  textFieldClassName?: string
  optionRender?: ReactElement
  native?: boolean
  onChange: (val: string) => void
}

const Select: FC<ISelectProps> = (props) => {
  const {
    className,
    optionListClassName,
    textFieldClassName,
    options,
    optionRender,
    native,
    value,
    onChange,
    id,
    endIcon,
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
        elementClassName={classJoin([
          styles.selectField,
          'appearance-none',
          textFieldClassName,
        ])}
        onChange={itemSelection}
        id={id}
        endIcon={
          <label htmlFor={id}>
            <Icon icon="v" />
          </label>
        }
        {...otherProps}
        {...(native
          ? {
              element: 'select',
              value: fieldValue,
              defaultValue: initialLabel,
              children: [
                <option value="" key="null"></option>,
                ...options.map((el) => (
                  <option value={el.value} key={el.value}>
                    {el.label}
                  </option>
                )),
              ],
            }
          : {
              readOnly: true,
              element: 'input',
              value: initialLabel,
              onFocus: openMenu,
              onBlurCapture: closeMenu,
            })}
      />

      {!native && (
        <div
          className={classJoin([
            styles.optionsList,
            optionListClassName,
            showOptions ? styles.active : '',
            'customScrollbar',
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

Select.defaultProps = { endIcon: 'v' }
