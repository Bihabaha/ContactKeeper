import React from 'react'

const Search = () => {
  return (
    <div>
        <form className="d-flex " role="search">
        {/*<button className=" me-5 btn  w-25  btn-outline-light" type="submit">Search</button>*/}
        <input className="form-control me-5 w-75 text-center  m-auto my-1 " type="search" placeholder="Search" aria-label="Search"/>
      </form>
    </div>
  )
}

export default Search