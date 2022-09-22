import { AriaAttributes, ButtonHTMLAttributes, createElement, FC } from 'react'

import Icon from 'Components/Icon/Icon'
import classJoin from 'Utils/classJoin'

import styles from './Button.module.scss'

type ButtonVariantsType = 'filled' | 'outlined' | 'link'
type ButtonColorsType = 'primary' | 'secondary' | 'gray' | 'white'
type ButtonSizesType =
  | 'lg' //50px
  | 'md' //40px
  | 'sm' //30px

export interface IButtonProps
  extends AriaAttributes,
    ButtonHTMLAttributes<Element> {
  variant?: ButtonVariantsType
  color?: ButtonColorsType
  className?: string
  fullWidth?: boolean
  disabled?: boolean
  size?: ButtonSizesType
  startIcon?: string
  icon?: string
  iconColor?: string
  iconSize?: string
  href?: string
  target?: string
}

const Button: FC<IButtonProps> = (props) => {
  const {
    variant,
    color,
    className,
    children,
    startIcon,
    size,
    fullWidth,
    disabled,
    icon,
    iconColor,
    iconSize,
    ...otherProps
  } = props

  const isIconButton = typeof children === 'undefined'

  return createElement(
    otherProps.href ? 'a' : 'button',
    {
      className: classJoin([
        otherProps.href ? 'noselect' : '',
        styles.ButtonRoot,
        styles[color],
        styles[variant],
        styles[`btn-size-${size}`],
        fullWidth ? ' w-full' : '',
        disabled ? styles.disabled : '',
        isIconButton ? '!p-0' : '',
        startIcon || icon
          ? isIconButton
            ? styles.iconButton
            : styles.containsIcon
          : '',
        className || '',
        variant === 'link' ? 'px-2 py-5' : '',
      ]),
      ...otherProps,
      disabled,
    },
    <>
      {startIcon && (
        <Icon
          icon={startIcon}
          size={iconSize}
          className="ml-2"
          {...(iconColor ? { color: iconColor } : {})}
        />
      )}

      {children}

      {icon && (
        <Icon
          icon={icon}
          className={classJoin([
            'align-middle',
            isIconButton ? 'mr-0' : 'mr-1',
          ])}
          size={iconSize}
          {...(iconColor ? { color: iconColor } : {})}
        />
      )}
    </>
  )
}

export default Button

Button.defaultProps = { variant: 'filled', color: 'primary', size: 'md' }
