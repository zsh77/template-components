import Radio, { IRadioProps } from 'Components/Radio/Radio'
import React, { FC } from 'react'
import classJoin from 'Utils/classJoin'

const ButtonGroup: FC<IRadioProps> = (props: IRadioProps) => {
  const { buttonProps, ...otherProps } = props

  return (
    <div className="border-gray-300 border flex rounded-lg">
      {Radio({
        variant: 'button',
        buttonProps: (isChecked) => {
          return {
            variant: isChecked ? 'filled' : 'link',
            ...buttonProps(isChecked),
            className: classJoin(['m-1', buttonProps(isChecked).className]),
          }
        },
        ...otherProps,
      })?.map((el, i) => {
        return (
          <>
            {el}
            {i !== otherProps.data.length - 1 && (
              <div className="border-l border-l-gray-300" />
            )}
          </>
        )
      })}
    </div>
  )
}

export default ButtonGroup

ButtonGroup.defaultProps = {
  buttonProps: () => {
    return { className: '' }
  },
}
