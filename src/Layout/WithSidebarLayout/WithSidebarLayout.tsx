import React from 'react'

const WithSidebarLayout = (props) => {
  const { children } = props
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {children}
    </div>
  )
}

export default WithSidebarLayout
