import React from 'react'
import './header.css'
import Nav from './nav'
function Header(){

    return(
        <div className="header">
            <div className="header_in">
                <div className="logo">
                    <h1>logo</h1>
                </div>
                <nav className="nav">
                <Nav/>
                </nav>
                <div className="info_area">

                </div>
            </div>
        </div>
    )
}

export default Header;