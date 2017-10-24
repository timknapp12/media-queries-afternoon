import React, { Component } from 'react';
import './navbar.css';
import { NavLink, Link } from 'react-router-dom';

class Navbar extends Component {
    
    render() {
        let pages = ['home', 'about', 'work', 'contact'];
        return (
            <div className='navigation'>
                <span className='my-name'><Link to='/'>bryan smith</Link></span>
                <ul className='pages'>
                    {pages.map(page => {
                        return (
                            <li key={page}>
                                <NavLink activeClassName='active' to={'/' + page} >
                                    {page}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default Navbar;