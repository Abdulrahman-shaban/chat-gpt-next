import React from 'react'

const layout = ({children}:{children: React.ReactNode}) => {
  return (
    <div>
      <nav>NavBar</nav>
      {children}
    </div>
  )
}

export default layout
