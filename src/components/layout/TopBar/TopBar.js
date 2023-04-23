import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser, faLock, faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './TopBar.module.scss';
//import { useDispatch } from 'react-redux';
import LoginModal from '../../features/LoginModal/LoginModal';
import Button from '../../common/Button/Button';

const TopBar = () => {
  //const dispatch = useDispatch();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleCloseModal = () => setShowLoginModal(false);
  const handleShowModal = () => setShowLoginModal(true);

  const onConfirmLogin = e => {
    e.preventDefault();
    //dispatch();
    handleCloseModal();
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={`col text-left ${styles.topOptions}`}>
            <ul>
              <li>
                <a href='#'>
                  USD <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </a>
              </li>
              <li>
                <a href='#'>
                  English <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </a>
              </li>
              <li>
                <a href='#'>
                  Help <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </a>
              </li>
            </ul>
          </div>
          <div className={`col text-right ${styles.topMenu}`}>
            <ul>
              <li>
                <Button onClick={handleShowModal}>
                  <FontAwesomeIcon className={styles.icon} icon={faUser} />{' '}
                  <span className={styles.text}>Login</span>
                </Button>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon className={styles.icon} icon={faLock} />{' '}
                  <span className={styles.text}>Register</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon className={styles.icon} icon={faBars} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {showLoginModal && (
        <LoginModal onClose={handleCloseModal} handleLogin={onConfirmLogin} />
      )}
    </div>
  );
};

// TopBar.propTypes = {};

export default TopBar;
