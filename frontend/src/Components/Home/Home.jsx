import React from 'react'
import Contacts from '../Contacts/Contacts'
import Form from '../Form/Form'

const Home = () => {
  return (
    <div>
      <div className=" mt-5">
        <div className="row">
          <div className="col-lg-8">
            <Contacts/>
          </div>
          <div className="col-lg-4">
            <Form/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home