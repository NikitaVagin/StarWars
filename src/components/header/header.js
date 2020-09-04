import React from 'react';
import {Link} from 'react-router-dom';
import './header.css'

const Header = ({onServiceChange}) =>{
    return(
        <nav className='navbar navbar-expand-lg bg-dark'>
            <div className='container-logo'>
                <Link className='navbar-brand' to='/'><h3>STAR DB</h3></Link>
            </div>
            <ul className='navbar-nav flex-row'>
                <li className='nav-item'><Link to='/people/' className='nav-link'>People</Link></li>
                <li className='nav-item'><Link to='/planets/' className='nav-link'>Planets</Link></li>
                <li className='nav-item'><Link to='/starships/' className='nav-link'>Starships</Link></li>
                <li className='nav-item'><Link to='/login' className='nav-link'>Login</Link></li>
                <li className='nav-item'><Link to='/secret' className='nav-link'>Serctet</Link></li>
            </ul>
            <button className='btn btn-primary btn-sm' onClick={onServiceChange}>Change Service Date</button>
        </nav>
    )
}

export default Header