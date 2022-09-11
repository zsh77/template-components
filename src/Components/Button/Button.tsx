import {
  AriaAttributes,
  ButtonHTMLAttributes,
  createElement,
  FunctionComponent,
} from 'react'
// import {
//   createSpacingClassNames,
//   PaddingAndMargin,
// } from 'utils/helpers/box/boxHelper'
// import BBIcon, { IconColorType } from '../BBIcon'
import styles from './Button.module.scss'

export enum ButtonVariantEnum {
  contained = 'contained',
  text = 'text',
  outlined = 'outlined',
}
export enum ButtonColorEnum {
  primary = 'primary',
  secondary = 'secondary',
  white = 'white',
  green = 'green',
  fadedGreen = 'fadedGreen',
  blue = 'blue',
  fadedRed = 'fadedRed',
}
enum sizeEnum {
  xLarge = 'xLarge',
  large = 'large',
  medium = 'medium',
  small = 'small',
}

interface IButtonProps extends AriaAttributes, ButtonHTMLAttributes<Element> {
  variant?: keyof typeof ButtonVariantEnum
  color?: keyof typeof ButtonColorEnum
  className?: string
  fullWidth?: boolean
  size?: keyof typeof sizeEnum
  iconColor?: any
  // iconColor?: IconColorType
  iconSize?: number
  startIcon?: string
  icon?: string
  href?: string
  target?: string
  download?: boolean
  aType?: string
}

const Button: FunctionComponent<IButtonProps> = (props) => {
  const {
    variant,
    color,
    className,
    children,
    icon,
    size,
    fullWidth,
    startIcon,
    iconColor,
    iconSize,
    aType,
    ...otherProps
  } = props

  const isIconButton = typeof children === 'undefined'

  return createElement(
    otherProps.href ? 'a' : 'button',
    {
      className: [
        otherProps.href ? 'noselect' : '',
        styles.ButtonRoot,
        styles[
          `btn-${color || ButtonColorEnum.primary}-${
            variant || ButtonVariantEnum.contained
          }`
        ],
        styles[`ButtonSize-${size || sizeEnum.large}`],
        fullWidth ? styles.fullWidth : '',
        isIconButton ? styles.iconButton : '',
        startIcon || icon ? styles.containsIcon : '',
        className || '',
        variant === 'text' ? styles.minimalPadding : '',
      ].join(' '),
      ...(aType && { type: aType }),
      ...otherProps,
    },
    <>
      {/* {startIcon && (
        <BBIcon
          icon={startIcon}
          size={iconSize}
          ml={2}
          {...(iconColor ? { color: iconColor } : {})}
        />
      )} */}

      {children}

      {/* {icon && (
        <BBIcon
          icon={icon}
          style={{ verticalAlign: 'middle' }}
          size={iconSize}
          mr={isIconButton ? 0 : 1}
          {...(iconColor ? { color: iconColor } : {})}
        />
      )} */}
    </>
  )
}

export default Button
