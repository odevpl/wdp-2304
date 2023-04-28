import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import styles from './RegistrationPage.module.scss';
import Switch from 'react-switch';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const RegistrationPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const handleFirstNameChange = e => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = e => {
    setLastName(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmChange = e => {
    setPasswordConfirm(e.target.value);
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

  const handleFormSubmit = e => {
    e.preventDefault();
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
              <Form.Group controlId='firstName'>
                <Form.Control
                  {...register('firstName', {
                    required: true,
                    minLength: 3,
                    maxLength: 30,
                  })}
                  type='firstName'
                  value={firstName}
                  onChange={handleFirstNameChange}
                  placeholder='Imię *'
                />
              </Form.Group>
              {errors.firstName && <span>Musisz podać imię.</span>}
              <Form.Group controlId='lastName'>
                <Form.Control
                  {...register('lastName', {
                    required: true,
                    minLength: 3,
                    maxLength: 30,
                  })}
                  type='lastName'
                  value={lastName}
                  onChange={handleLastNameChange}
                  placeholder='Nazwisko *'
                />
              </Form.Group>
              {errors.lastName && <span>Musisz podać nazwisko.</span>}
              <Form.Group controlId='emailInput'>
                <Form.Control
                  {...register('email', { required: true, pattern: /@/ })}
                  type='email'
                  value={email}
                  onChange={handleEmailChange}
                  placeholder='E-mail *'
                />
              </Form.Group>
              {errors.email && (
                <span>Adres e-mail powinien składać się ze znaku &apos;@&apos;.</span>
              )}
              <Form.Group controlId='passwordInput'>
                <Form.Control
                  {...register('password', {
                    required: true,
                    minLength: 3,
                  })}
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder='Hasło *'
                />
              </Form.Group>
              {errors.password && (
                <span>Hasło musi się składać z minimum trzech znaków.</span>
              )}
              <Form.Group controlId='passwordConfirmInput'>
                <Form.Control
                  {...register('passwordConfirm', {
                    required: true,
                    minLength: 3,
                    validate: value => value === password,
                  })}
                  type={showPassword ? 'text' : 'password'}
                  value={passwordConfirm}
                  onChange={handlePasswordConfirmChange}
                  placeholder='Powtórz hasło *'
                />
              </Form.Group>
              {errors.passwordConfirm && (
                <span>Musisz wpisać dokładnie takie samo hasło, jak powyżej.</span>
              )}
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
                {...register('agreeToTerms', { required: true })}
                className={`${styles.checkbox} form-check-input-focus-border`}
                type='checkbox'
                label={
                  <span>
                    Akceptuję warunki <Link to='/regulamin'>regulaminu *</Link>
                  </span>
                }
                checked={agreeToTerms}
                onChange={handleAgreeToTermsChange}
              />
              {errors.agreeToTerms && (
                <span>Musisz zaakceptować warunki regulaminu.</span>
              )}
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
              <Button variant='orange' onClick={validate()}>
                Zarejestruj się
              </Button>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RegistrationPage;
