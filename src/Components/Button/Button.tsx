import { createElement, forwardRef, ReactNode, MouseEventHandler } from 'react'
import Icon from 'Components/Icon/Icon'
import Spinner from 'Components/Spinner/Spinner'
import classJoin from 'Utils/classJoin'
import styles from './Button.module.scss'

type ButtonVariantsType = 'filled' | 'outlined' | 'link'
type ButtonColorsType =
  | 'primary'
  | 'secondary'
  | 'gray'
  | 'white'
  | 'black'
  | 'customColor'
type ButtonSizesType =
  | 'lg' //50px
  | 'md' //40px
  | 'sm' //30px

export interface IButtonProps {
  variant?: ButtonVariantsType
  color?: ButtonColorsType
  className?: string
  children?: ReactNode
  onClick?: MouseEventHandler | undefined
  iconClassName?: string
  fullWidth?: boolean
  disabled?: boolean
  size?: ButtonSizesType
  startIcon?: string
  startIconClassName?: string
  icon?: string
  iconColor?: string
  iconSize?: string
  href?: string
  target?: string
  element?: 'a' | 'button' | 'div'
  isLoading?: boolean
  noHover?: boolean
  'aria-label'?: string
  rel?: string
}

const Button = forwardRef((props: IButtonProps, ref) => {
  const {
    variant,
    color,
    className,
    iconClassName,
    children,
    startIcon,
    startIconClassName,
    size,
    fullWidth,
    disabled,
    icon,
    iconColor,
    iconSize,
    element,
    isLoading,
    noHover,
    ...otherProps
  } = props

  const isIconButton = typeof children === 'undefined'

  return createElement(
    element || (otherProps.href ? 'a' : 'button'),
    {
      className: classJoin([
        styles.ButtonRoot,
        styles[color],
        styles[variant],
        styles[`btn-size-${size}`],
        fullWidth && ' w-full',
        (otherProps.href || element === 'a') && styles.aTag,
        disabled && styles.disabled,
        isIconButton && '!p-0',
        startIcon || icon
          ? isIconButton
            ? styles.iconButton
            : styles.containIcon
          : '',
        isLoading && 'relative',
        noHover && styles.noHover,
        className,
      ]),
      ...otherProps,
      disabled,
    },
    <>
      {startIcon && (
        <Icon
          icon={startIcon}
          size={iconSize}
          className={classJoin([
            isIconButton ? 'ml-0' : 'ml-2',
            startIconClassName,
          ])}
          {...(iconColor ? { color: iconColor } : {})}
        />
      )}

      {children}

      {icon && (
        <Icon
          icon={icon}
          className={classJoin([isIconButton ? 'mr-0' : 'mr-1', iconClassName])}
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
})

export default Button

Button.displayName = 'Button'
Button.defaultProps = { variant: 'filled', color: 'primary', size: 'md' }
