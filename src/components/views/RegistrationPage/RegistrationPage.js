import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import styles from './RegistrationPage.module.scss';
import Switch from 'react-switch';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmChange = event => {
    setPasswordConfirm(event.target.value);
  };

  const handleAgreeToTermsChange = () => {
    setAgreeToTerms(!agreeToTerms);
  };

  const handleSelectAllChange = () => {
    setSelectAll(!selectAll);
    setAgreeToTerms(!agreeToTerms);
    setNewsletter(!newsletter);
  };

  const handleNewsletter = () => {
    setNewsletter(!newsletter);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
  };

  return (
    <div className='container'>
      <div className={styles.wrapper}>
        <Form onSubmit={handleFormSubmit}>
          <div className={styles.formHeader}>
            <Form.Check
              inline
              type='radio'
              label='Mam konto'
              name='accountType'
              id='existing'
              value='existing'
            />
            <Form.Check
              inline
              type='radio'
              label='Nie mam konta'
              name='accountType'
              id='new'
              value='new'
              defaultChecked
              className='custom-control'
            />
          </div>
          <div className={styles.formBody}>
            <h5>Podaj dane do rejestracji</h5>
            <div className={styles.formInputs}>
              <Form.Group controlId='emailInput'>
                <Form.Control
                  type='email'
                  value={email}
                  onChange={handleEmailChange}
                  placeholder='E-mail *'
                />
              </Form.Group>
              <Form.Group controlId='passwordInput'>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder='Hasło *'
                />
              </Form.Group>
              <Form.Group controlId='passwordConfirmInput'>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  value={passwordConfirm}
                  onChange={handlePasswordConfirmChange}
                  placeholder='Powtórz hasło *'
                />
              </Form.Group>
            </div>
            <Form.Group
              controlId='showPasswordSwitch'
              className='d-flex justify-content-end'
            >
              <Switch
                id='showPasswordSwitch'
                type='switch'
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                label='Pokaż hasło'
              />
              <Form.Label htmlFor='showPasswordSwitch' className='ml-2'>
                {showPassword ? 'Ukryj hasło' : 'Pokaż hasło'}
              </Form.Label>
            </Form.Group>
            <Form.Group className={styles.checkboxes}>
              <Form.Check
                className={styles.selectAll}
                type='checkbox'
                label='Zaznacz wszystkie'
                checked={selectAll}
                onChange={handleSelectAllChange}
              />
              <Form.Check
                className={`${styles.checkbox} form-check-input-focus-border`}
                type='checkbox'
                label={
                  <span>
                    Akceptuję warunki <a href='/regulamin'> regulaminu *</a>
                  </span>
                }
                checked={agreeToTerms}
                onChange={handleAgreeToTermsChange}
              />
              <Form.Check
                className={styles.checkbox}
                type='checkbox'
                label='Zapisz mnie na newsletter'
                checked={newsletter}
                onChange={handleNewsletter}
              />
            </Form.Group>
          </div>
          <div className={styles.formFooter}>
            <Link to='/'>
              {' '}
              <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon> Wróć
            </Link>
            <Link to='/'>
              <Button variant='orange'>Zarejestruj się</Button>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RegistrationPage;
