import React from 'react'

const Info = (props) => {
  const { name, image_url, slug, avg_score } = props.attributes
  const total = props.reviews ? props.reviews.length : 0
  
  return (
    <div className="bg-white overflow-hidden">
      <div className="flex px-6 py-4">
        <img className="rounded-full h-24 w-24 ml-1 mr-2 my-4" src={image_url} alt={name} />
        <p className="font-bold text-6xl mr-auto mb-2">{name}</p>
      </div>
      <div className="px-6 py-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{slug}</span>
      </div>
      <div className="px-6 py-1">
        {total} Users Reviews 
      </div>
      <div className="px-6 py-1">
      
      </div>
      <div className="px-6 py-1">
        {avg_score} Out of 5
      </div>
    </div>
  )
}

export default Info
