import { FunctionComponent, HTMLAttributes } from 'react'
import Text from 'Components/Text/Text'
import classJoin from 'Utils/classJoin'

import styles from './Chips.module.scss'
import Icon from 'Components/Icon/Icon'

export type ChipColors = 'secondary' | 'gray'

interface IChipsProps extends HTMLAttributes<Element> {
  label: string
  color?: ChipColors
  canRemove?: boolean
  onRemove?: (param0?) => void
  iconClassName?: string
}

const Chips: FunctionComponent<IChipsProps> = (props) => {
  const { label, color, onRemove, canRemove, iconClassName, ...otherProps } =
    props

  return (
    <div className={classJoin([styles.chips, styles[color]])} {...otherProps}>
      {label}
      {canRemove && (
        <Icon
          icon="x"
          className={classJoin(['cursor-pointer mr-1.5', iconClassName])}
          onClick={onRemove}
        />
      )}
    </div>
  )
}

export default Chips

Chips.defaultProps = { label: '', color: 'secondary' }
