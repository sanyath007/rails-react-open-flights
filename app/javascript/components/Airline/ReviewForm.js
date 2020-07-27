import React, { Fragment } from 'react'

const ReviewForm = (props) => {
  const ratingOptions = [5,4,3,2,1].map((score, index) => {
    return (
      <Fragment key={`rating-${score}`}>
        <input type="radio" name="rating" value={score} onChange={() => console.log('selected: ', score)} />
        <label className="mx-2">{score}</label>
      </Fragment>
    )
  })

  return (
    <div className="w-full max-w-xs">
      <form 
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={props.handleSubmit}
      >
        <div>Have an experiance with [Airline Name]? Share your review!</div>
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
          {ratingOptions}
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
