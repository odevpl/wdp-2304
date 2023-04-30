import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './LoginModal.module.scss';
import { getRegisteredUsersByLogin } from '../../../redux/logOnUserRedux';
import { useSelector } from 'react-redux';

const LoginModal = ({ onClose, handleLogin }) => {
  /* dodałem prostą funkcję która z modala  dodaje użytkownika do logOnUser w state.
  Następna osoba która będzie rozbudowywać o funkcję sprawdzania poprawności loginu i hasła, niech np storzy nowy state z zarejestrowanymi użytkownikami.
  Potem niech usunie ten komenatrz... :) */

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const registeredUsers = useSelector(state => getRegisteredUsersByLogin(state, login));

  const handleSubmit = e => {
    e.preventDefault();

    if (registeredUsers && registeredUsers.password === password) {
      handleLogin(login, password);
    } else {
      if (!login) {
        setError('Podaj login');
      } else if (!registeredUsers) {
        setError('Wprowadzono nieprawidłowy login');
      } else if (registeredUsers.password !== password) {
        setError('Wprowadzono nieprawidłowe hasło');
      } else {
        setError('Wprowadzono nieprawidłowy login i hasło');
      }
    }
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
                <label htmlFor='login'>Login</label>
                <input
                  type='login'
                  className='form-control'
                  id='login'
                  placeholder='Enter login'
                  value={login}
                  onChange={e => setLogin(e.target.value)}
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
                {error && <small className='text-danger'>{error} </small>}
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
