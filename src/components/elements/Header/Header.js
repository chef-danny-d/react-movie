import React from 'react'
import '../../../App.min.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="rmdb-header">
            <div className="rmdb-header-content">
                <Link to="/">
                    <img
                        src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png"
                        alt="RMDB Logo"
                        className="rmdb-logo"
                    />
                </Link>
            </div>
        </div>
    )
}

export default Header
