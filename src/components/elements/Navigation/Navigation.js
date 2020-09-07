import React from 'react'
import { Link } from 'react-router-dom'
import './_navigation.sass'
import PropTypes from 'prop-types'

const Navigation = (props) => {
    return (
        <div className="rmdb-navigation">
            <div className="rmdb-navigation-content">
                <Link to="/">
                    <p>Home</p>
                </Link>
                <p>/</p>
                <p>{props.movie}</p>
            </div>
        </div>
    )
}

Navigation.propTypes = {
    movie: PropTypes.string,
}

export default Navigation
