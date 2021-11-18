import React from 'react';
import propTypes from 'prop-types';

const HandleOverview = (overview) => {
    if (overview.length > 180) {
        return <span>{overview.slice(0, 180)}...</span>
    } else {
        return <span>{overview}</span>
    }
}

const Movie = ({ id, title, release, poster, overview, genres }) => {
    return (
        <div className="movie__item">
            <div className="movie__poster">
                <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${poster}`} alt={title}/>
            </div>
            <div className="movie__content">
                <h3 className="movie__title">{title}</h3>
                <p className="movie__release">{release}</p>
                {/* <p className="movie__genre">{
                    genres.map(genre => {
                        return <span>{genre}</span>
                    })
                }</p> */}
                <p className="movie__overview">{HandleOverview(overview)}</p>
            </div>
        </div>
    );
};


Movie.propTypes = {
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    release: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    overview: propTypes.string.isRequired,
    genre: propTypes.array.isRequired
}

export default Movie;