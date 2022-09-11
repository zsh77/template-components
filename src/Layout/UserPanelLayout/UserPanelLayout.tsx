import React from 'react'
import Header from 'Modules/Header/Header'

const UserPanelLayout = (props) => {
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

export default UserPanelLayout
