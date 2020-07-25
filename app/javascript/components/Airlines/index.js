import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AirlineItem from './AirlineItem'

const Airlines = () => {
  const [airlines, setAirlines] = useState([])

  useEffect(() => {
    // Get data from api
    // update airlines state
    axios.get('/api/v1/airlines')
      .then(res => setAirlines(res.data.data))
      .catch(err => console.log(err))
  }, [])

  const list = airlines.map((item, index) => (
      <AirlineItem 
        key={item.attributes.name + index}
        attributes={item.attributes}
      />
    )
  )

  return (
    <div className="container mr-auto ml-auto">
      <h1 className="h-10 content-center">This is the Airlines#index view for the app.</h1>

      <div className="grid grid-cols-3 gap-4">{list}</div>
    </div>
  );
}

export default Airlines
