import React from 'react'
import SearchBar from './SearchBar'

const AppBar = () => {
  return (
    <div className='flex justify-between'>
      <div>YouTube</div>
      <SearchBar />

      <div>Sign-in</div>

    </div>
  )
}

export default AppBar
