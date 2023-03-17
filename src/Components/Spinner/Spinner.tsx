import React, { FC } from 'react'
import classJoin from 'Utils/classJoin'

interface ISpinnerProps {
  className?: string
  color?: string
  radius?: number
  strokeWidth?: number
}

const Spinner: FC<ISpinnerProps> = (props) => {
  const { className, color, radius, strokeWidth } = props

  var circumference = radius * 2 * Math.PI
  return (
    <div role="status">
      <svg
        className={classJoin(['animate-spin', className])}
        width={2 * radius + 2 * strokeWidth}
        height={2 * radius + 2 * strokeWidth}
      >
        <circle
          className={classJoin([color])}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDashoffset={`${(2 * circumference) / 5}`}
          strokeDasharray={`${circumference} ${circumference}`}
          r={radius}
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default Spinner

Spinner.defaultProps = {
  className: '',
  color: 'stroke-primary',
  radius: 20,
  strokeWidth: 3,
}
