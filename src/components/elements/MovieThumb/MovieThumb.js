import React from 'react'
import '../../../App.min.css'
import { Link } from 'react-router-dom'

const MovieThumb = (props) => {
    return (
        <div className="rmdb-moviethumb">
            {props.clickable ? (
                <Link
                    to={{
                        pathname: `/${props.movieID}`,
                        movieName: `${props.movieName}`,
                    }}
                >
                    <img src={props.image} alt="movie thumb" />
                </Link>
            ) : (
                <img src={props.image} alt="movie thumb" />
            )}
        </div>
    )
}

export default MovieThumb
