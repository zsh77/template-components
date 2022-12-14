import Header from 'Modules/Header/Header'
import React from 'react'

const MainLayout = (props) => {
  const { children } = props
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  )
}

export default MainLayout
