import React from 'react'
import { Clock, DollarSign, ShoppingBag } from 'react-feather'
import { calcTime, convertMoney } from '../../../helpers'
import './_movieinfobar.sass'

const MovieInfoBar = (props) => {
    return (
        <div className="rmdb-movieinfobar">
            <div className="rmdb-movieinfobar-content">
                <div className="rmdb-movieinfobar-content-col">
                    <Clock className="fa-time" />
                    <span className="rmdb-movieinfobar-info">
                        Running time: {calcTime(props.time)}
                    </span>
                </div>
                <div className="rmdb-movieinfobar-content-col">
                    <DollarSign className="fa-budget" />
                    <span className="rmdb-movieinfobar-info">
                        Budget: {convertMoney(props.budget)}
                    </span>
                </div>
                <div className="rmdb-movieinfobar-content-col">
                    <ShoppingBag className="fa-revenue" />
                    <span className="rmdb-movieinfobar-info">
                        Revenue: {convertMoney(props.revenue)}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MovieInfoBar
