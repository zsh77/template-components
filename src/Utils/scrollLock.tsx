import { SCROLLBAR_WIDTH } from 'Constants'

const scrollLock = (isOpen) => {
  if (typeof document !== 'undefined') {
    if (isOpen) {
      if (typeof window !== 'undefined') {
        const scrollbarWidth =
          window.innerWidth - document.documentElement.clientWidth
        scrollbarWidth === SCROLLBAR_WIDTH &&
          (document.body.style.paddingRight = `${SCROLLBAR_WIDTH}px`)
      }
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
      if (typeof window !== 'undefined')
        document.body.style.paddingRight === `${SCROLLBAR_WIDTH}px` &&
          (document.body.style.paddingRight = '0px')
    }
  }
}
export default scrollLock
