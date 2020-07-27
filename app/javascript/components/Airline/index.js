import React, { useState, useEffect } from 'react'
// import { BrowserRouter as Router, Link } from 'react-router-dom'
import axios from 'axios'
import Info from './Info'
import ReviewList from './ReviewList'
import ReviewForm from './ReviewForm'

const Airline = (props) => {
  const [airline, setAirline] = useState({})
  const [review, setReview] = useState({})
  const [loaded, setLoaded] = useState(false)
  
  useEffect(() => {
    const slug = props.match.params.slug
    const url = `/api/v1/airlines/${slug}`

    axios.get(url)
      .then(res => {
        console.log(res)
        setAirline(res.data)
        setLoaded(true)
      })
      .catch(err => console.log(err))
  }, [])

  const handleChange = e => {
    e.preventDefault()
    setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
  }
  
  const handleSubmit = e => {
    e.preventDefault()
    
    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    const airline_id = airline.data.id
    axios.post('/api/v1/reviews', { review, airline_id })
      .then(res => {
        const included = [...airline.included, res.data]
        setAirline({ ...airline, included })
        setReview({ title: '', description: '', score: 0 })
      })
      .catch(err => console.log(err))
  }

  const setRating = (score, e) => {
    e.preventDefault()
    
    setReview({ ...review, score })
  }

  return (
    <div className="container mr-auto ml-auto my-4">
      <h1>This is the Airline#show view for our app.</h1>

      <div className="flex my-4">
        <div id="left-column" className="w-3/5">
          {loaded && <Info attributes={airline.data.attributes} reviews={airline.included} />}

          <ReviewList />
        </div>
        <div id="right-column" className="w-2/5 bg-gray-500">
          <ReviewForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            setRating={setRating}
            review={review}
          />
        </div>
      </div>
    </div>
  );
}

export default Airline
