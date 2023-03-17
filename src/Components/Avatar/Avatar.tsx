import React, { FC } from 'react'
import classJoin from 'Utils/classJoin'
import styles from './Avatar.module.scss'

export interface IAvatarProps {
  size?:
    | 'sm' // 64px
    | 'md' // 80px
    | 'lg' // 100px
  image?: string
  className?: string
}

const Avatar: FC<IAvatarProps> = (props) => {
  const { className, size, image } = props

  return (
    <div className={classJoin([styles.avatar, styles[size], className])}>
      {image}
    </div>
  )
}

export default Avatar

Avatar.defaultProps = {
  size: 'sm',
}
