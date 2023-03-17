import React, { FC } from 'react'
import Link from 'next/link'
import classJoin from 'Utils/classJoin'

export interface IBreadCrumbProps {
  className?: string
  sections?: any[]
  container?: string
  data?: { label?: string; href?: string }[]
}

const BreadCrumb: FC<IBreadCrumbProps> = (props) => {
  const { className, container, data } = props

  return (
    <div
      className={classJoin([
        'min-h-[48px] flex overflow-x-auto flex-nowrap items-center text-sm mt-2 justify-start w-full md:gs-container transparentHorizontalScrollbar box-content',
        container,
        className,
      ])}
    >
      {data?.length > 0
        ? data.map((sec, i) => (
          <Link
            href={sec.href}
            key={i}
            className="hover:text-secondary shrink-0 pb-5 pt-2"
          >
            {sec.label + (i !== data.length - 1 ? ' /' : '')}&nbsp;
          </Link>
        ))
        : null}
    </div>
  )
}

export default BreadCrumb
BreadCrumb.defaultProps = { container: 'gs-container', data: [] }
