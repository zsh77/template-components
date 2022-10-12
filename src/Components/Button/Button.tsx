import { AriaAttributes, ButtonHTMLAttributes, createElement, FC } from 'react'

import Icon from 'Components/Icon/Icon'
import classJoin from 'Utils/classJoin'

import styles from './Button.module.scss'
import Spinner from 'Components/Spinner/Spinner'

type ButtonVariantsType = 'filled' | 'outlined' | 'link'
type ButtonColorsType = 'primary' | 'secondary' | 'gray' | 'white' | 'black'
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
  element?: 'a' | 'button' | 'div'
  isLoading?: boolean
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
    element,
    isLoading,
    ...otherProps
  } = props

  const isIconButton = typeof children === 'undefined'

  return createElement(
    element || (otherProps.href ? 'a' : 'button'),
    {
      className: classJoin([
        otherProps.href ? 'select-none' : '',
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
        isLoading && 'relative',
        className || '',
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
      {isLoading && (
        <div className={styles.loaderBg}>
          <Spinner radius={10} className="transform-none" />
        </div>
      )}
    </>
  )
}

export default Button

Button.defaultProps = { variant: 'filled', color: 'primary', size: 'md' }
