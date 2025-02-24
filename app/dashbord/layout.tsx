import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <header>
            <h1 className='text-3xl'>
                <q>DashBord</q>
            </h1>
            {children}
        </header>
      
    </div>
  )
}

export default layout
