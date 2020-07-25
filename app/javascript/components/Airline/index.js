import React from 'react'
// import { BrowserRouter as Router, Link } from 'react-router-dom'

const Airline = ({ attributes }) => (
  <div className="container mr-auto ml-auto">
    <h1>This is the Airline#show view for our app.</h1>
  </div>
  // <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg">
  //   <img className="w-full h-40" src={attributes.image_url} alt={attributes.name} />
  //   <div className="px-6 py-4">
  //     <p className="font-bold text-xl mb-2">{attributes.name}</p>
  //     <div className="flex space-x-1">
  //       <Link
  //         className="bg-gray-300 rounded-full px-4 py-2" 
  //         to={`/airlines/${attributes.slug}`}
  //       >
  //         View
  //       </Link>
  //       <Link
  //         className="bg-orange-300 rounded-full px-4 py-2" 
  //         to={`/airlines/${attributes.slug}/edit`}
  //       >
  //         Edit
  //       </Link>
  //       <Link
  //         className="bg-red-300 rounded-full px-4 py-2"
  //         to={`/airlines/${attributes.slug}`}
  //       >
  //         Delete
  //       </Link>
  //     </div>
  //   </div>
  // </div>
);

export default Airline
