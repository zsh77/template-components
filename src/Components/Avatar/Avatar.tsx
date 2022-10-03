import React, { HTMLAttributes } from 'react'
import classJoin from 'Utils/classJoin'

export interface IBackdropProps extends HTMLAttributes<Element> {
  size?: string
  image?: string
  className?: string
}

const Avatar = (props) => {
  const { className, size, image } = props

  return <div className={classJoin([size, className])}>{image}</div>
}

export default Avatar
