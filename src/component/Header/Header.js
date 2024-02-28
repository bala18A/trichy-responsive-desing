import React from 'react'
import "./Header.css"
const Header = () => {
    return (
        <div>
            <div className="container">
                <header>
                    <div className="logo">
                        <p>Study<span className="buddy">Buddy</span></p>
                    </div>
                    <ul>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Blog</li>
                    </ul>
                    <button className="header-btn"> GetStarted</button>
                </header>
            </div>
        </div>
    )
}

export default Header