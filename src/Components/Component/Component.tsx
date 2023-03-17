import React, { FC } from 'react'
import classJoin from 'Utils/classJoin'
import styles from './Component.module.scss'

export interface IComponentProps {
  className?: string
}

const Component: FC<IComponentProps> = (props) => {
  const { className } = props

  return <div className={classJoin([styles.component, className])}></div>
}

export default Component
Component.defaultProps = {}
