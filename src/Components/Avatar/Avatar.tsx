import React, { FC, HTMLAttributes } from 'react'
import classJoin from 'Utils/classJoin'
import styles from './Avatar.module.scss'

export interface IAvatarProps extends HTMLAttributes<Element> {
  size?:
    | 'sm' // 64px
    | 'md' // 64px
    | 'lg' // 64px
  image?: string
  className?: string
}

const Avatar: FC<IAvatarProps> = (props) => {
  const { className, size, image } = props

  return (
    <div className={classJoin([styles.avatar, 'bg-rose-300', size, className])}>
      {image}
    </div>
    // <img className={classJoin([styles.avatar, size, className])} src={image}/>
  )
}

export default Avatar

Avatar.defaultProps = {
  size: 'md',
}
