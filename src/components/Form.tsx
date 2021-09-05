import React, { useEffect, useState } from 'react';

const Form = ({ setFormValues }): JSX.Element => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [country, setCountry] = useState('Poland');
  const [agree, setAgree] = useState(false);
  const [gender, setGender] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = (): void => {
    setErrors({});
    if (!agree) {
      setErrors((state) => ({ ...state, agree }));
    }
    if (firstName.length === 0) {
      setErrors((state) => ({ ...state, firstName }));
    }
    if (lastName.length === 0) {
      setErrors((state) => ({ ...state, lastName }));
    }
    if (birthDate.length === 0) {
      setErrors((state) => ({ ...state, birthDate }));
    }
  };

  useEffect(() => {
    validate();
  }, [agree, firstName, birthDate, lastName, gender]);

  const reset = (): void => {
    setAgree(false);
    setCountry('');
    setLastName('');
    setBirthDate('');
    setBirthDate('');
    setFirstName('');
    setGender(false);
  };

  const handleSubmit = (event): void => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      setFormValues((state) => [
        ...state,
        {
          firstName,
          lastName,
          birthDate,
          country,
          agree,
          gender,
        },
      ]);
      reset();
    }
  };

  return (
    <form className="main__form" onSubmit={handleSubmit}>
      <label htmlFor="firstName">
        Name
        <input
          className="main__form-input"
          type="text"
          value={firstName}
          name="firstName"
          onChange={(event) => setFirstName(event.target.value)}
        />
      </label>
      <div className={firstName.length !== 0 ? 'hidden' : 'main__erros_agree'}>*the field cannot be empty</div>
      <label htmlFor="lastName">
        Surname
        <input
          className="main__form-input"
          type="text"
          value={lastName}
          name="lastName"
          onChange={(event) => setLastName(event.target.value)}
        />
      </label>
      <div className={lastName.length !== 0 ? 'hidden' : 'main__erros_agree'}>*the field cannot be empty</div>
      <label htmlFor="date">
        Birth date
        <input
          className="main__form-input"
          type="date"
          value={birthDate}
          name="date"
          onChange={(event) => setBirthDate(event.target.value)}
        />
      </label>
      <div className={birthDate.length !== 0 ? 'hidden' : 'main__erros_agree'}>*you must specify the date of birth</div>
      <label htmlFor="country">
        Country
        <select
          className="main__form-select"
          name="country"
          id="country"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        >
          <option>Poland</option>
          <option>Belarus</option>
          <option>USA</option>
        </select>
      </label>
      <div className="main__toggle-wrapper">
        <p>Male</p>
        <input
          className="main__toggle-button"
          type="checkbox"
          name="toggle"
          id="toggle-button"
          checked={gender}
          onChange={(event) => setGender(event.target.checked)}
        />
        <p>Female</p>
      </div>
      <label className="main__check" htmlFor="agree">
        I agree with the use of personal data
        <input
          className="main__form-checkbox"
          type="checkbox"
          name="agree"
          id="agree"
          checked={agree}
          onChange={() => setAgree((prev) => !prev)}
        />
        <div className={agree ? 'hidden' : 'main__erros_agree'}>*agree should be check</div>
      </label>
      <div>
        <input className="main__form-submit" type="submit" value="Send" onChange={() => setAgree(() => !agree)} />
      </div>
    </form>
  );
};

export default Form;
