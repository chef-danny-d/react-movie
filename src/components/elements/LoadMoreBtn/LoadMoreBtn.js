import React from 'react'
import '../../../App.min.css'
import PropTypes from 'prop-types'

const LoadMoreBtn = ({ text, onClick }) => {
    return (
        <div className="rmdb-loadmorebtn" onClick={() => onClick(true)}>
            <p>{text}</p>
        </div>
    )
}

LoadMoreBtn.protoTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default LoadMoreBtn
