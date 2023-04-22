import React from 'react';
import PropTypes from 'prop-types';
import styles from './LoginModal.module.scss';
import Button from '../../common/Button/Button';

const LoginModal = ({ onClose, handleLogin }) => {
  return (
    <div className={`modal ${styles.modal}`} tabIndex='-1' role='dialog'>
      <div className='modal-dialog' role='document'>
        <div className={`modal-content ${styles.modalContent}`}>
          <div className='modal-header'>
            <h5 className='modal-title'>Login</h5>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
              onClick={onClose}
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <form>
              <div className='form-group'>
                <label htmlFor='email'>Email address</label>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  placeholder='Password'
                />
                <small className='form-text text-muted'>Forgot password?</small>
              </div>
            </form>
          </div>
          <div className={`modal-footer ${styles.modalFooter}`}>
            <Button className={styles.button} onClick={handleLogin}>
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

LoginModal.propTypes = {
  onClose: PropTypes.func,
  handleLogin: PropTypes.func,
};

export default LoginModal;
