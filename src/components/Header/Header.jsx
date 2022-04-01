import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <h1>tShirtMania</h1>
                <div className="menu">
                    <Link to="/home">Home</Link>
                    <Link to="/order">Orders</Link>
                    <Link to='/granditem'>Granditem</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;