import './index.scss';

import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/Logopi7.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <h1>pi7</h1>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#6b6b6b"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#6b6b6b"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#6b6b6b"/>
            </NavLink>
        </nav>
        <ul>
            <li >
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#6b6b6b" />
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar
