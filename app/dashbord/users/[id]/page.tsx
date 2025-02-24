import React from 'react'

const page = ( {params}: { params: {id: string }}) => {
    const { id } = params;
  return (
    <div>
<header>
    <h1 className='text-3xl'>user profile: {id} </h1>
</header>
    </div>
  )
}

export default page
