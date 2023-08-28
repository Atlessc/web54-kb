import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function NavLeft() {
    return (
        <div className='nav-left'>
            <Link to="/" className='nav-item'>Home</Link>
            <Link to="/articles" className='nav-item'>KBs</Link>
            <Link to="/feedback" className='nav-item'>Feedback</Link>
            <Link to="/tools" className='nav-item'>Tools</Link>
        </div>
    )
};