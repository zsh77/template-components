import React, { FC, useState } from 'react'
import Icon from 'Components/Icon/Icon'
import classJoin from 'Utils/classJoin'

export interface IRatingProps {
  className?: string
  rate?: number
  setRate?: (prevState: number) => void
  readOnly?: boolean
  id?
}

const Rating: FC<IRatingProps> = (props) => {
  const { className, rate, setRate, readOnly, id } = props

  const [tempRate, setTempRate] = useState(rate)

  return (
    <div className={classJoin(['w-fit flex flex-row-reverse', className])}>
      {[...Array(5).fill('')].map((_, i) => (
        <div
          key={`rating-${id}-${i + 1}`}
          {...(!readOnly
            ? {
                onMouseEnter: () => {
                  setTempRate(i + 1)
                },
                onMouseLeave: () => {
                  setTempRate(rate)
                },
                onClick: () => {
                  setRate(tempRate)
                },
              }
            : {})}
        >
          <Icon
            icon={i < tempRate ? 'star_filled' : 'star'}
            color="text-yellow"
            className="z-20 text-lg"
            {...(!readOnly
              ? { role: 'button', 'aria-label': `rating-star-${i + 1}-${id}` }
              : {})}
          />
        </div>
      ))}
    </div>
  )
}

export default Rating

Rating.defaultProps = { rate: 0 }
