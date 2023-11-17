import React, { useState, useEffect, useRef } from 'react';
import { useContactContext } from '../../hooks/useContactContext';

const Search = () => {
  const { contacts, dispatch, searched } = useContactContext();

  const text = useRef('');

  useEffect(() => {
    if(searched === null) {
      text.current.value = '';
    }
  },[])

  const searchContacts = text => {
    dispatch({type: 'SEARCH_CONTACT', payload: text})
  }

  const clearSearch = () => {
    dispatch({type: 'CLEAR_SEARCH'})
  }

  const onChange = e => {
    if(text.current.value !== '') {
      searchContacts(e.target.value);
    } else {
      clearSearch();
    }
  }

  return (
    <div>
      <form className='d-flex' role='search'>
        {/*<button className=" me-5 btn  w-25  btn-outline-light" type="submit">Search</button>*/}
        <input
          className=' bg-light  form-control m-auto w-75 text-center  m-auto my-1 '
          type='text'
          ref={text}
          placeholder='Search'
          aria-label='Search'
          required
          id='search'
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default Search;