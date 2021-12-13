import React from 'react'
import '../styles/Header.css'
function Header() {
    return (
        <div className="header">
            <div className="logoContainer">
                <img src="/images/header/cryptopunk-logo.png" alt ="logo" className="punkLogo" />
            </div>
            <div className="searchBar">
                <div className="searchIconContainer">
                        <img src="/images/header/search.png" alt="search-icon" className='search-icon' />
                </div>
                <input type="text" className="searchInput" placeholder='Collection,Item or User' />
            </div>
            <div className="header-items">
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>
            <div className="header-actions">
                <div className="theme-switch-logo-container">
                    <img src="/images/header/theme-switch.png" alt="theme switch" />
                </div>
            </div>
            <div className="login-button">
                GET IN
            </div>
        </div>
    )
}

export default Header
