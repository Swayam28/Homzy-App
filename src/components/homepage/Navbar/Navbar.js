import React from 'react';
import '../homepage.css';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <>
            <div id='header' className="container">
                <h2><Link to='/home' style={{ color: 'inherit', textDecoration: 'inherit'}}>HomZy</Link></h2>
                <div className='container'>
                    <p><Link to='/home'style={{ color: 'inherit', textDecoration: 'inherit'}}>Home</Link></p>
                    <p><Link to='/about'style={{ color: 'inherit', textDecoration: 'inherit'}}>About</Link></p>
                    <p><Link to='/contact'style={{ color: 'inherit', textDecoration: 'inherit'}}>Contact</Link></p>
                    <p><Link to='/gallery'style={{ color: 'inherit', textDecoration: 'inherit'}}>Gallery</Link></p>
                    <p><Link to='/users'style={{ color: 'inherit', textDecoration: 'inherit'}}>Users</Link></p>
                </div>
                <div className='container'>
                    <p>My List</p>
                    <Link to='/'style={{ color: 'inherit', textDecoration: 'inherit'}}><i class="fa fa-user-circle-o" style={{fontSize:"35px",color:"white"}}></i></Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;