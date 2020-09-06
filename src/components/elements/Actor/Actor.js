import React from 'react'
import './_actor.sass'
import { IMAGE_BASE_URL } from '../../../config'
import PropTypes from 'prop-types'

const Actor = (props) => {
    const POSTER_SIZE = 'w154'
    return (
        <div className="rmdb-actor">
            <img
                src={
                    props.actor.profile_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.actor.profile_path}`
                        : './images/no_image.jpg'
                }
                alt={`${props.actor.name}'s thumbnail`}
            />
            <span className="rmdb-actor-name">{props.actor.name}</span>
            <span className="rmdb-actor-character">
                {props.actor.character}
            </span>
        </div>
    )
}

Actor.propTypes = {
    actor: PropTypes.object,
}

export default Actor
