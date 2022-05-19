import React from 'react'
import "./Movieitem.css"

function Movieitem({ item }) {

  const baseurl = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="card col-lg-3 moviecard" >
      {/* <h1>Movie Item</h1> */}

      {/* <h1>{item.name}</h1> */}

      <img src={`${baseurl}${item.poster_path}`} className="img-fluid" alt="img" />
      <div className="card-body">

        <h3>Rating:{item.vote_average}</h3>
      </div>

    </div>
  )
}

export default Movieitem