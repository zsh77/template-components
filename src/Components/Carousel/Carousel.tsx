import React, {
  FC,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import Button from 'Components/Button/Button'
import classJoin from 'Utils/classJoin'
import styles from './Carousel.module.scss'

interface ICarouselProps {
  data: any[]
  components: (param: any, i?) => React.ReactNode
  margin: number
  containerClassName?: string
  carouselParentClassName?: string
  autoPlay?: boolean
  timeout?: number
  handleTouchInMobile?: boolean
  hasHandlesInMobile?: boolean
  className?: string
  buttonIsOut?: boolean
  hasDots?: boolean
  dotsClassName?: string
  defaultActive?: number
}

const Carousel = (props: ICarouselProps, ref) => {
  const {
    data,
    components,
    className,
    containerClassName,
    autoPlay,
    margin,
    timeout,
    carouselParentClassName,
    handleTouchInMobile = false,
    hasHandlesInMobile,
    buttonIsOut,
    hasDots,
    dotsClassName,
    defaultActive = 0,
  } = props

  const [active, setActive] = useState(defaultActive >= 0 ? defaultActive : 0)
  const [itemsCount, setItemsCount] = useState(0)
  const [itemWidth, setItemWidth] = useState(1)

  const [touchPosition, setTouchPosition] = useState(null)

  const containerRef = useRef<HTMLDivElement>()

  const [touchStartPos, setTouchStartPos] = useState(0)

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

  useImperativeHandle(
    ref,
    () => {
      return {
        setActive,
      }
    },
    []
  )

  const goToPrevious = () => {
    // active <= 0
    //   ? setActive(itemsCount - itemsNum)
    //   : setActive((active) => active - 1)
    setActive((lastIndex) => ((lastIndex || itemsCount) - 1) % itemsCount)
  }
  const goToNext = () => {
    // active === itemsCount - itemsNum
    //   ? setActive(0)
    //   : setActive((active) => active + 1)
    setActive((lastIndex) => (lastIndex + 1) % itemsCount)
  }

  const MOVE_THRESHOLD = 15
  const X_MOVEMENT_STEP = 5

  const handleTouchStart = (e) => {
    const clientX = getCoors(e)
    setTouchPosition(clientX)
    setTouchStartPos(clientX)
  }

  const handleTouchMove = (e) => {
    const clientX = getCoors(e)
    const touchMove = clientX - touchPosition || 1
    if (
      Math.abs(touchMove) > X_MOVEMENT_STEP &&
      (active !== 0 || touchMove > 0) &&
      (active !== data.length - 1 || touchMove < 0)
    ) {
      setTouchPosition(clientX)
    }
  }

  const handleTouchEnd = (event) => {
    const { clientX } = event.changedTouches[0]
    const xMove = clientX - touchStartPos

    if (xMove > MOVE_THRESHOLD) goToNext()
    if (xMove < -1 * MOVE_THRESHOLD) goToPrevious()

    setTouchStartPos(0)
    setTouchPosition(0)
  }

  function getCoors(e) {
    return e?.clientX || e.touches?.[0].clientX
  }

  useEffect(() => {
    if (containerRef?.current) {
      const itmCount = containerRef?.current?.children?.length || 0
      const itmWidth = containerRef?.current?.children[0]?.clientWidth || 1
      setItemsCount(itmCount)
      setItemWidth(itmWidth)
    }
  }, [])

  return (
    <>
      <div
        className={classJoin(['relative', className])}
        {...(handleTouchInMobile
          ? {
              onTouchStart: handleTouchStart,
              onTouchMove: handleTouchMove,
              onTouchEnd: handleTouchEnd,
            }
          : {})}
      >
        <Button
          icon="arrow_right_circle"
          aria-label="previous"
          className={classJoin([
            styles.carouselArrow,
            !hasHandlesInMobile && '!hidden md:!block',
            styles.back,
            buttonIsOut && styles.isOut,
          ])}
          color="white"
          size="sm"
          iconColor="text-primary"
          onClick={goToPrevious}
        />
        <div
          className={classJoin([
            styles.carouselParent,
            handleTouchInMobile && styles.handleTouchInMobile,
            carouselParentClassName,
          ])}
        >
          <div
            className={classJoin([styles.carousel, containerClassName])}
            ref={containerRef}
            style={{
              transform: `translateX(${itemWidth * active}px)`,
            }}
          >
            {data?.length > 0 &&
              data.map((el, i) => <div key={i}>{components(el, i)}</div>)}
          </div>
        </div>
        <Button
          icon="arrow_left_circle"
          aria-label="next"
          className={classJoin([
            styles.carouselArrow,
            !hasHandlesInMobile && '!hidden md:!block',
            styles.forward,
            buttonIsOut && styles.isOut,
          ])}
          color="white"
          size="sm"
          iconColor="text-primary"
          onClick={goToNext}
        />
      </div>

      {hasDots && (
        <div className={classJoin(['flex my-2 justify-center', dotsClassName])}>
          {[...Array(Object.keys(data).length).fill('')].map((el, i) => (
            <div
              className={classJoin([
                'w-2 h-2 rounded-full bg-gray-400 mx-1',
                i === active && 'bg-secondary-300',
              ])}
              key={i}
              onClick={() => {
                setActive(i)
              }}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default forwardRef(Carousel)
