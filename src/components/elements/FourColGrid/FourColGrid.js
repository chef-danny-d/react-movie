import React from 'react'
import '../../../App.min.css'
import PropTypes from 'prop-types'

const FourColGrid = (props) => {
    const renderElements = () => {
        const gridElements = props.children.map((element, i) => {
            //loop through children and modify array using map
            return (
                <div key={i} className="rmdb-grid-element">
                    {element}
                </div>
            )
        })
        return gridElements
    }

    return (
        <div className="rmdb-grid">
            {props.header && !props.loading ? <h1>{props.header}</h1> : null}
            <div className="rmdb-grid-content">{renderElements()}</div>
        </div>
    )
}

FourColGrid.propTypes = {
    children: PropTypes.array,
    header: PropTypes.string,
    loading: PropTypes.bool,
}

export default FourColGrid
