import React, { useState, useEffect } from 'react'
import Movieitem from './Movieitem'
import axios from 'axios'

const MovieList = () => {

    const [items, setitems] = useState([]);

    useEffect(() => {

        const key = "e9036c8cf8588ee3fb04cc4a45a64cb9";

        const getmoviedata = async () => {
            const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`);

            // console.log(res.data.results);
            setitems(res.data.results);

        };

        getmoviedata();

    }, [])

    return (
        <div>
            {/* <h1>Movie List</h1> */}

            <div className='container'>
                <div className='row'>

                    {items.map((item) => (

                        <Movieitem key={item.id} item={item} />

                    ))}

                </div>
            </div>
        </div>
    )
}

export default MovieList