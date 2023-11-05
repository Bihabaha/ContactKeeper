import React from 'react'
import { useLocation } from 'react-router-dom'
import Contacts from '../Contacts/Contacts'

const SearchedItem = ({contacts}) => {
    const queryString=useLocation().search
    const queryParams=new URLSearchParams(queryString)
    const query =queryParams.get("q")

    const url ="api/contacts?q=" + query

  return (
    <div>
<h2>Contacts including "{query}"</h2>

{contacts && <Contacts contacts={contacts} />}
    </div>
  )
}

export default SearchedItem