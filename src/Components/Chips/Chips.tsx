import { FC } from 'react'
import classJoin from 'Utils/classJoin'

import styles from './Chips.module.scss'
import Icon from 'Components/Icon/Icon'

export type ChipColors = 'secondary' | 'gray'

interface IChipsProps {
  className?: string
  label: string
  color?: ChipColors
  canRemove?: boolean
  onRemove?: (param0?) => void
  iconClassName?: string
}

const Chips: FC<IChipsProps> = (props) => {
  const {
    label,
    color,
    onRemove,
    canRemove,
    iconClassName,
    className,
    ...otherProps
  } = props

  return (
    <div
      className={classJoin([styles.chips, styles[color], className])}
      {...otherProps}
    >
      {label}
      {canRemove && (
        <Icon
          icon="x"
          aria-label="delete"
          role="button"
          className={classJoin(['cursor-pointer mr-1.5', iconClassName])}
          onClick={onRemove}
        />
      )}
    </div>
  )
}

export default Chips

Chips.defaultProps = { label: '', color: 'secondary' }
