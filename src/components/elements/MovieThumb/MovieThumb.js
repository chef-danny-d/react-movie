import React from 'react'
import '../../../App.min.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

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

MovieThumb.propTypes = {
    image: PropTypes.string,
    movieID: PropTypes.number,
    movieName: PropTypes.string,
    clickable: PropTypes.bool,
}

export default MovieThumb
