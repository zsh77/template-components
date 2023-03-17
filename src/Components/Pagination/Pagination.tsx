import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Icon from 'Components/Icon/Icon'
import classJoin from 'Utils/classJoin'

export interface IPaginationProps {
  fetchPageData: (page: number) => void
  pages: {
    url: string
    label: string
    active: boolean
  }[]
  currentPage: number
  lastPage: number
}

const Pagination: FC<IPaginationProps> = (props) => {
  const { pages, currentPage, lastPage } = props

  const router = useRouter()

  function pageUrl(page) {
    const path = router.asPath
    if (path.includes('?')) {
      if (path.includes('page=')) {
        return path.replace(/page=(\d*)/, `page=${page}`)
      } else {
        return path + `&page=${page}`
      }
    } else {
      return path + `?page=${page}`
    }
  }

  const NextPrevComponent = (type: 'next' | 'prev') => {
    const { condition, page } = {
      prev: {
        condition: currentPage > 1,
        page: currentPage - 1,
      },
      next: {
        condition: currentPage < lastPage,
        page: currentPage + 1,
      },
    }[type]
    const child = (
      <Icon
        className="w-9 h-9 flex items-center justify-center"
        color={condition ? 'text-dark-text' : 'text-gray-600'}
        icon={type === 'prev' ? 'arrow_right' : 'arrow_left'}
      />
    )
    return condition ? (
      <Link href={pageUrl(page)} passHref scroll shallow>
        {child}
      </Link>
    ) : (
      child
    )
  }

  const PageComponent = (page: string) => {
    const isCurrent = currentPage === Number(page)
    const child = (
      <div
        className={classJoin([
          'w-9 h-9 border rounded-full flex items-center justify-center',
          isCurrent
            ? 'bg-primary text-white border-primary'
            : 'border-gray-550 text-gray-600',
        ])}
      >
        {page}
      </div>
    )

    return !isCurrent ? (
      <Link href={pageUrl(page)} passHref scroll shallow>
        {child}
      </Link>
    ) : (
      child
    )
  }

  return lastPage > 1 ? (
    <div className="flex flex-row flex-wrap justify-center items-center mb-4">
      {pages.map(({ label }) => {
        return (
          <div className="m-1 w-9 h-9" key={label}>
            {label === 'pagination.previous' ? (
              NextPrevComponent('prev')
            ) : label === 'pagination.next' ? (
              NextPrevComponent('next')
            ) : label === '...' ? (
              <span className="w-9 h-9 flex items-center justify-center">
                ...
              </span>
            ) : (
              PageComponent(label)
            )}
          </div>
        )
      })}
    </div>
  ) : (
    <></>
  )
}

export default Pagination

Pagination.defaultProps = { pages: [] }
