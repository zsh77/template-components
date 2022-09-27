import Button from 'Components/Button/Button'
import React, { FC, HTMLAttributes, useEffect, useRef, useState } from 'react'
import classJoin from 'Utils/classJoin'
import styles from './Carousel.module.scss'

interface ICarouselProps extends Omit<HTMLAttributes<Element>, 'autoplay'> {
  data: any[]
  containerClassName?: string
  components?: (param: any) => React.ReactNode
  autoPlay?: boolean
  margin?: number
  timeout?: number
}

const Carousel: FC<ICarouselProps> = (props) => {
  const { data, components, containerClassName, autoPlay, margin, timeout } =
    props
  const [active, setActive] = useState(0)
  const [itemsNum, setItemsNum] = useState(1)
  const [itemsCount, setItemsCount] = useState(0)
  const [itemWidth, setItemWidth] = useState(1)

  const containerRef = useRef<HTMLDivElement>()

  useEffect(() => {
    if (autoPlay) {
      const timeOut = setTimeout(() => {
        goToNext()
        // return () => {}
      }, timeout || 2000)
      return () => {
        clearTimeout(timeOut)
      }
    }
  }, [active])

  const goToPrevious = () => {
    active === 0
      ? setActive(itemsCount - itemsNum)
      : setActive((active) => active - 1)
  }
  const goToNext = () => {
    active === itemsCount - itemsNum
      ? setActive(0)
      : setActive((active) => active + 1)
  }

  useEffect(() => {
    if (containerRef?.current) {
      const itmCount = containerRef?.current?.children?.length || 0
      const itmWidth = containerRef?.current?.children[0]?.clientWidth || 1
      const itmParent = containerRef?.current?.clientWidth || 0
      const itmNum = Math.floor(itmParent / (itmWidth + margin * itmCount))
      setItemsCount(itmCount)
      setItemWidth(itmWidth)
      setItemsNum(itmNum)
    }
  }, [])

  return (
    <div className="relative">
      <Button
        icon="<"
        className={classJoin([styles.carouselArrow, styles.back])}
        color="white"
        onClick={goToPrevious}
      />
      <div className={styles.carouselParent}>
        <div
          className={classJoin([styles.carousel, containerClassName])}
          ref={containerRef}
          style={{
            transform: `translateX(${itemWidth * active}px)`,
          }}
        >
          {data.map((el, i) => (
            <div key={i}>{components(el)}</div>
          ))}
        </div>
      </div>
      <Button
        icon=">"
        className={classJoin([styles.carouselArrow, styles.forward])}
        color="white"
        onClick={goToNext}
      />
    </div>
  )
}

export default Carousel
