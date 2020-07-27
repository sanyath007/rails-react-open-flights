import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Gray, Hover, Selected } from './Stars'

const RatingContainer = styled.div`
  text-align: center;
  border-radius: 4px;
  font-size: 18px;
  padding: 20px 0 10px 0;
  border: 1px solid #e6e6e6;
  background: #fff;
`
const RatingBox = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  position: relative;

  input {
    display: none;
  }
  
  label {
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-image: url("data:image/svg+xml;charset=UTF-8, ${Gray}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%;
  }
  
  input:checked ~ label,
  input:checked ~ label ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8, ${Selected}");
  }
  
  input:not(:checked) ~ label:hover,
  input:not(:checked) ~ label:hover ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8, ${Hover}");
  }
`

const ReviewForm = (props) => {
  const ratingOptions = [5,4,3,2,1].map((score, index) => {
    return (
      <Fragment key={`rating-${score}`}>
        <input
          type="radio"
          name="rating"
          value={score}
          checked={props.review.score === score}
          onChange={() => console.log('selected: ', score)}
        />
        <label className="mx-2" onClick={props.setRating.bind(this, score)}></label>
      </Fragment>
    )
  })

  return (
    <div className="w-full">
      <form 
        className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={props.handleSubmit}
      >
        <div className="mb-4 font-bold text-2xl">Have an experiance with [Airline Name]? Share your review!</div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb2" htmlFor="title">Title :</label>
          <input
            type="text"
            name="title"
            value={props.review.title}
            onChange={props.handleChange}
            placeholder="Review Title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label>Description :</label>
          <input
            type="text"
            name="description"
            value={props.review.description}
            onChange={props.handleChange}
            placeholder="Review Description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <RatingContainer>
            <p className="font-bold text-xl mb-1">Rate This Airline :</p>
            <RatingBox>
              {ratingOptions}
            </RatingBox>
          </RatingContainer>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Submit Your Review
          </button>
        </div>
      </form>
    </div>
  )
}

export default ReviewForm
