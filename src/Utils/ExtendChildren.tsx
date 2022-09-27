import { Children, cloneElement, isValidElement, ReactElement } from 'react'

/**
 * extendChildren is used in a case where you want to pass additional props down to children
 * of a component. way of using it is extendChildren(props.children ,{color:"red"})
 */
export const extendChildren = (props: {
  children: typeof Children | ReactElement | any
  additionalProps: { [key: string]: any }
}) => {
  const { children, additionalProps } = props

  Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, additionalProps)
    }
    return child
  })
}
