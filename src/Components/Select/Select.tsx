import { cloneElement, FC, useEffect, useState } from 'react'
import TextField, { ITextFieldProps } from 'Components/TextField/TextField'
import classJoin from 'Utils/classJoin'
import styles from './Select.module.scss'
import Icon from 'Components/Icon/Icon'

interface ISelectProps extends Omit<ITextFieldProps, 'onChange' | 'id'> {
  id: string
  options: { value: string; label: string }[]
  optionListClassName?: string
  textFieldClassName?: string
  OptionRender?: FC<any>
  native?: boolean
  noEmptyOption?: boolean
  onChange: (val: string) => void
  optionProps?: any
}

const Select: FC<ISelectProps> = (props) => {
  const {
    className,
    optionListClassName,
    textFieldClassName,
    options,
    OptionRender,
    native,
    value,
    onChange,
    noEmptyOption,
    id,
    icon,
    iconClassName,
    optionProps,
    ...otherProps
  } = props
  const [showOptions, setShowOptions] = useState(false)
  const [fieldValue, setFieldValue] = useState(value)

  const initialLabel =
    options.find((el) => el.value === (fieldValue || value))?.label || ''

  useEffect(() => {
    if (value !== fieldValue) setFieldValue(value)
  }, [value])

  const itemSelection = (e, directVal?) => {
    e.stopPropagation()
    const val = native
      ? e.target.value
      : e?.target?.getAttribute('value') || directVal || value || ''
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
        {...otherProps}
        icon={
          <label htmlFor={id}>
            {typeof icon === 'string' ? (
              <Icon
                icon={icon}
                className={classJoin([styles.endIcon, iconClassName])}
              />
            ) : (
              typeof icon !== 'undefined' && icon
            )}
          </label>
        }
        {...(native
          ? {
              element: 'select',
              value: fieldValue,
              defaultValue: initialLabel,
              children: [
                !noEmptyOption && <option value="" key="null" />,
                ...options.map((el) => (
                  <option value={el.value} key={el.value} {...optionProps}>
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
              OptionRender ? (
                <OptionRender />
              ) : (
                <div className={styles.optionRender} />
              ),
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

Select.defaultProps = { icon: 'arrow_down', iconClassName: '', options: [] }
