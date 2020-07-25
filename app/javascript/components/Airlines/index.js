import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Airlines = () => {
  const [airlines, setAirlines] = useState([])

  useEffect(() => {
    // Get data from api
    // update airlines state
    axios.get('/api/v1/airlines')
      .then(res => setAirlines(res.data.data))
      .catch(err => console.log(err))
  }, [])

  const list = airlines.map(item => (
      <li key={item.attributes.name}>
        {item.attributes.name}
      </li>
    )
  )

  return (
    <div>
      <h1>This is the Airlines#index view for the app.</h1>

      <ul>{list}</ul>
    </div>
  );
}

export default Airlines
