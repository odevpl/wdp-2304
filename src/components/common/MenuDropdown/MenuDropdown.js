import { useState } from 'react';
import React, { useRef } from 'react';
import styles from './MenuDropdown.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';

const MenuDropdown = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    if (!showMenu) {
      menuRef.current.classList.add('show');
    } else {
      menuRef.current.classList.remove('show');
    }
  };

  return (
    <div className='btn-group'>
      <FontAwesomeIcon
        className={`btn btn-secondary dropdown-toggle ${styles.icon}`}
        icon={faListUl}
        type='button'
        id='dropdownMenuButton'
        data-bs-toggle='dropdown'
        aria-expanded='false'
        onClick={toggleMenu}
      />
      <ul
        ref={menuRef}
        className='dropdown-menu dropdown-menu-right'
        aria-labelledby='dropdownMenuButton'
      >
        <li>
          <a className='dropdown-item' href='#'>
            Home
          </a>
        </li>
        <li>
          <a className='dropdown-item' href='#'>
            Furniture
          </a>
        </li>
        <li>
          <a className='dropdown-item' href='#'>
            Chair
          </a>
        </li>
        <li>
          <a className='dropdown-item' href='#'>
            Table
          </a>
        </li>
        <li>
          <a className='dropdown-item' href='#'>
            Sofa
          </a>
        </li>
        <li>
          <a className='dropdown-item' href='#'>
            Bedroom
          </a>
        </li>
        <li>
          <a className='dropdown-item' href='#'>
            Blog
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MenuDropdown;
