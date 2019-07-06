import React from 'react'
import '../../../App.min.css'

const HeroImage = (props) => {
    return(
        <div className="rmdb-heroimage"
             style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 24%, rgba(0,0,0,0) 25%, rgba(0,0,0,1) 100%), url('${props.image}')`
            }}>
            <div className="rmdb-heroimage-content">
                <div className="rmdb-heroimage-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default HeroImage