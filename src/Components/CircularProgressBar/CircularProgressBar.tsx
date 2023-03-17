import React, { FC } from 'react'
import classJoin from 'Utils/classJoin'
import styles from './CircularProgressBar.module.scss'

export interface ICircularProgressBarProps {
  radius: number
  className?: string
  color?: string
  strokeWidth?: number
  percent?: number
}

const CircularProgressBar: FC<ICircularProgressBarProps> = (props) => {
  const { className, radius, color, percent, strokeWidth } = props

  var circumference = radius * 2 * Math.PI

  return (
    <svg
      className={className}
      width={2 * radius + 2 * strokeWidth}
      height={2 * radius + 2 * strokeWidth}
    >
      <circle
        className={classJoin([styles.circle, color])}
        strokeWidth={strokeWidth}
        fill="transparent"
        strokeDashoffset={`${
          circumference - ((percent || 0) / 100) * circumference
        }`}
        strokeDasharray={`${circumference} ${circumference}`}
        r={radius}
        cx={radius + strokeWidth}
        cy={radius + strokeWidth}
      />
    </svg>
  )
}

export default CircularProgressBar

CircularProgressBar.defaultProps = {
  radius: 40,
  strokeWidth: 4,
  percent: 0,
  color: 'stroke-primary',
}
