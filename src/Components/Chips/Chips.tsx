import { FunctionComponent, HTMLAttributes } from 'react'
import Text from 'Components/Text/Text'
import classJoin from 'Utils/classJoin'

import styles from './Chips.module.scss'

export type ChipColors = 'secondary' | 'gray'

interface IChipsProps extends HTMLAttributes<Element> {
  label: string
  color?: ChipColors
}

const Chips: FunctionComponent<IChipsProps> = (props) => {
  const { label, color, ...otherProps } = props

  return (
    <div className={classJoin([styles.chips, styles[color]])} {...otherProps}>
      <Text>{label}</Text>
    </div>
  )
}

export default Chips

Chips.defaultProps = { label: '', color: 'secondary' }
