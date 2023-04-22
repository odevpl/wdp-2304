import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import styles from './RegistrationPage.module.scss';
import Switch from 'react-switch';
import 'bootstrap/dist/css/bootstrap.min.css';
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

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
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

    // handle form submission logic here
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
            />
          </div>
          <div className={styles.formBody}>
            <h3>Podaj dane do rejestracji</h3>
            <Form.Group controlId='emailInput'>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type='email'
                value={email}
                onChange={handleEmailChange}
                placeholder='E-mail *'
              />
            </Form.Group>
            <Form.Group controlId='passwordInput'>
              <Form.Label>Hasło:</Form.Label>
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={handlePasswordChange}
                placeholder='Hasło *'
              />
            </Form.Group>
            <Form.Group controlId='passwordConfirmInput'>
              <Form.Label>Powtórz hasło:</Form.Label>
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                value={passwordConfirm}
                onChange={handlePasswordConfirmChange}
                placeholder='Powtórz hasło *'
              />
            </Form.Group>
            <Form.Group controlId='showPasswordSwitch'>
              <Switch
                id='showPasswordSwitch'
                type='switch'
                label={showPassword ? 'Ukryj hasło' : 'Pokaż hasło'}
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
            </Form.Group>
            <Form>
              <Form.Check
                type='switch'
                id='flexSwitchCheckDefault'
                label='Default switch checkbox input'
              />
            </Form>
            <Form.Group className={styles.checkboxes}>
              <Form.Check
                type='checkbox'
                label='Akceptuję regulamin serwisu'
                checked={agreeToTerms}
                onChange={handleAgreeToTermsChange}
              />
              <Form.Check
                type='checkbox'
                label='Zapisz mnie na newsletter'
                checked={newsletter}
                onChange={handleNewsletter}
              />
              <div className={styles.selectAll}>
                <Form.Check
                  type='checkbox'
                  label='Zaznacz wszystkie'
                  checked={selectAll}
                  onChange={handleSelectAllChange}
                />
              </div>
            </Form.Group>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RegistrationPage;
