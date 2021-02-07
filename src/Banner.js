import React, { useEffect, useState } from 'react'
import axios from './axios'
import requests from './Requests'
import "./Banner.css"

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(requests.fetchNetflixOriginals);
            setMovie(response.data.results[
                Math.floor(Math.random() * response.data.results.length - 1)
            ])
            return response;
        }
        fetchData();
    }, []);
    console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str
    }

    return (
        <header className="banner" style={{
            backgroundSize: 'cover',
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
            backgroundPosition: 'center center'
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">
                    Movie Name
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h6 className="banner__description">{truncate
                    (`This is a test description This is a test description This is a test descriptionThis is a test descriptionThis
                is a test description This is a test descriptionThis is a test
                descriptionThis is a test descriptionThis is a test description`, 200)}</h6>
            </div>
            <div className="banner--fadeBotton" />
        </header >
    )
}

export default Banner
