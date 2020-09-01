import React from 'react'
import '../../../App.min.css'

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

export default FourColGrid
