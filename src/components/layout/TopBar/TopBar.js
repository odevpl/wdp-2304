import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser, faLock, faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './TopBar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import LoginModal from '../../features/LoginModal/LoginModal';
import Button from '../../common/Button/Button';
import { logOnUser } from '../../../redux/logOnUserRedux';
import { Link } from 'react-router-dom';

const TopBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.logOnUser.user);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleCloseModal = () => setShowLoginModal(false);
  const handleShowModal = () => setShowLoginModal(true);

  const onConfirmLogin = (email, password) => {
    dispatch(logOnUser({ email: email, password: password }));
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
                {user ? (
                  <span className={styles.text}>{user.email}</span>
                ) : (
                  <Button onClick={handleShowModal}>
                    <FontAwesomeIcon className={styles.icon} icon={faUser} />{' '}
                    <span className={styles.text}>Login</span>
                  </Button>
                )}
              </li>
              <li>
                <Link to='/register'>
                  <FontAwesomeIcon className={styles.icon} icon={faLock} />{' '}
                  <span className={styles.text}>Register</span>
                </Link>
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

//TopBar.propTypes = {};

export default TopBar;
