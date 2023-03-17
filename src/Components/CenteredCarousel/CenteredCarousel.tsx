import React, { FC, useEffect, useRef, useState } from 'react'
import Button from 'Components/Button/Button'
import classJoin from 'Utils/classJoin'
import styles from './CenteredCarousel.module.scss'

interface ICenteredCarouselProps {
  data: any[]
  components: (param: any, param2?: number) => React.ReactNode
  margin: number
  containerClassName?: string
  carouselParentClassName?: string
  autoPlay?: boolean
  timeout?: number
  setActiveSlide?: (param0?) => void
  activeSlide?: number
  handleTouchInMobile?: boolean
}

const CenteredCarousel: FC<ICenteredCarouselProps> = (props) => {
  const {
    data,
    components,
    containerClassName,
    autoPlay,
    margin,
    timeout,
    carouselParentClassName,
    setActiveSlide,
    activeSlide,
    handleTouchInMobile,
  } = props
  const [active, setActive] = useState(0 || activeSlide)
  const [itemsNum, setItemsNum] = useState(1)
  const [itemsCount, setItemsCount] = useState(0)
  const [itemWidth, setItemWidth] = useState(1)

  const [touchPosition, setTouchPosition] = useState(null)

  const containerRef = useRef<HTMLDivElement>()

  useEffect(() => {
    if (autoPlay) {
      const timeOut = setTimeout(() => {
        goToNext()
      }, timeout || 2000)
      return () => {
        clearTimeout(timeOut)
      }
    }
  }, [active])

  const goToPrevious = () => {
    if (active === 0) {
      setActive(itemsCount - itemsNum - 1)
      setActiveSlide(itemsCount - itemsNum - 1)
    } else {
      setActive((active) => active - 1)
      setActiveSlide((active) => active - 1)
    }
  }
  const goToNext = () => {
    if (active === itemsCount - itemsNum - 1) {
      setActive(0)
      setActiveSlide(0)
    } else {
      setActive((active) => active + 1)
      setActiveSlide((active) => active + 1)
    }
  }

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX
    setTouchPosition(touchDown)
  }

  const handleTouchMove = (e) => {
    const touchDown = touchPosition
    if (touchDown === null) {
      return
    }
    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch
    if (diff > 5) {
      goToPrevious()
    }
    if (diff < -5) {
      goToNext()
    }
    setTouchPosition(null)
  }

  useEffect(() => {
    if (containerRef?.current) {
      const itmCount = containerRef?.current?.children?.length || 0
      const itmWidth = containerRef?.current?.children[0]?.clientWidth || 1
      const itmParent = containerRef?.current?.clientWidth || 0
      const itmNum = Math.floor(itmParent / ((itmWidth + margin) * itmCount))

      setItemsCount(itmCount)
      setItemWidth(itmWidth)
      setItemsNum(itmNum)
    }
  }, [])

  return (
    <div className="relative">
      <Button
        icon="arrow_right_circle"
        aria-label="previous"
        className={classJoin([styles.carouselArrow, styles.back])}
        color="white"
        size="sm"
        iconColor="text-primary"
        onClick={goToPrevious}
      />
      <div
        className={classJoin([styles.carouselParent, carouselParentClassName])}
        {...(handleTouchInMobile
          ? { onTouchStart: handleTouchStart, onTouchMove: handleTouchMove }
          : {})}
      >
        <div
          className={classJoin([
            styles.carousel,
            'pr-[100%]',
            containerClassName,
          ])}
          ref={containerRef}
          style={{
            transform: `translateX(50%) translateX(${
              itemWidth * active + itemWidth / 2
            }px)`,
          }}
        >
          {data.map((el, i) => (
            <div key={i}>{components(el, i)}</div>
          ))}
        </div>
      </div>
      <Button
        icon="arrow_left_circle"
        aria-label="next"
        className={classJoin([styles.carouselArrow, styles.forward])}
        color="white"
        size="sm"
        iconColor="text-primary"
        onClick={goToNext}
      />
    </div>
  )
}

export default CenteredCarousel
CenteredCarousel.defaultProps = { handleTouchInMobile: false }
