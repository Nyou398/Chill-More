import React, { useEffect, useState } from 'react';
import axios from './axios';


function Row({ title, fetchURL }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchURL]);

    console.log(movies);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {/** several row__poster(s) */}
                {movies.map(film => (
                    <img src = {film.poster_path} alt = {film.name} />
                ))}
            </div>
        </div>
    )
}

export default Row
