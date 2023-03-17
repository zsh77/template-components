import React, { FC, useEffect, useState } from 'react'
import Icon from 'Components/Icon/Icon'
import classJoin from 'Utils/classJoin'
import styles from './Slider.module.scss'

export interface ISliderProps {
  className?: string
  min?: number
  max?: number
  value?: [number, number]
  onChange?: (data: [number, number]) => void
}

const Slider: FC<ISliderProps> = (props) => {
  const { className, min, max, value, onChange } = props

  // rightValue: max value
  const [rightValue, setRightValue] = useState<number>(max)
  // leftValue: min value
  const [leftValue, setLeftValue] = useState<number>(min)

  useEffect(() => {
    if (value && value.length === 2) {
      if (value[0] !== leftValue) setLeftValue(value[0])
      if (value[1] !== rightValue) setRightValue(value[1])
    }
  }, [value])

  function changeHandler(rightVal: number, leftVal: number) {
    onChange([leftVal, rightVal])
  }

  function onChangeLeft(e) {
    const val = e.target.value
    setLeftValue(Math.min(parseInt(val), rightValue - 1))
    changeHandler(rightValue, Math.min(parseInt(val), rightValue - 1))
  }

  function onChangeRight(e) {
    const val = e.target.value
    setRightValue(Math.max(parseInt(val), leftValue + 1))
    changeHandler(Math.max(parseInt(val), leftValue + 1), leftValue)
  }

  return (
    <div className={classJoin([styles.sliderContainer, className])}>
      <input
        type="range"
        min={min}
        max={max}
        value={leftValue}
        onInput={onChangeLeft}
        className={classJoin(['appearance-none', styles.rangeInput])}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={rightValue}
        onInput={onChangeRight}
        className={classJoin(['appearance-none', styles.rangeInput])}
      />

      <div className={styles.slider}>
        <div className={styles.track} />

        <div
          className={classJoin([styles.thumb, styles.left])}
          style={{
            left: `${((leftValue - min) / (max - min)) * 100}%`,
          }}
        >
          <Icon icon="arrow_left_circle" color="text-primary" />
        </div>

        <div
          className={classJoin([styles.thumb, styles.right])}
          style={{
            right: `${100 - ((rightValue - min) / (max - min)) * 100}%`,
          }}
        >
          <Icon icon="arrow_right_circle" color="text-primary" />
        </div>
      </div>
    </div>
  )
}

export default Slider

Slider.defaultProps = { min: 0, max: 100 }
