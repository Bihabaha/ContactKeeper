import React from 'react'

const Search = () => {
  return (
    <div className='text-center'>
        <label className='mt-3 '>
            <input type="text" 
            className='bg-danger'
           required
            placeholder='Search for contatcs'
            />
        </label>
    </div>
  )
}

export default Search