import React from 'react'
import Logo from '../../assets/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <nav>
        <div>
            <img src={Logo} alt="" />
        </div>
        <form>
            <input type="text" name="" id="" placeholder='Search by Books, Authors etc..'/>
            <button type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </form>
    </nav>
  )
}

export default NavBar; 