import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './LoginModal.module.scss';

const LoginModal = ({ onClose, handleLogin }) => {
  /* dodałem prostą funkcję która z modala  dodaje użytkownika do logOnUser w state.
  Następna osoba która będzie rozbudowywać o funkcję sprawdzania poprawności loginu i hasła, niech np storzy nowy state z zarejestrowanymi użytkownikami.
  Potem niech usunie ten komenatrz... :) */

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    handleLogin(email, password);
  };

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
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='email'>Email address</label>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  placeholder='Password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <small className='form-text text-muted'>Forgot password?</small>
              </div>
              <div className={`modal-footer ${styles.modalFooter}`}>
                <button className={styles.button} type='submit'>
                  Login
                </button>
              </div>
            </form>
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
