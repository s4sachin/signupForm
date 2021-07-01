import React, { useState } from "react";

const RegistrationForm = () => {
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    phone: "",
    skills: "",
  });

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = {
      ...userRegistration,
      id: new Date().getTime().toString(),
    };
    console.log(records);
    setRecords([...records, newRecord]);
    console.log(records);

    setUserRegistration({ username: "", email: "", phone: "", skills: "" });
  };

  return (
    <>
      <form action='' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Full Name</label>
          <input
            type='text'
            autoComplete='off'
            value={userRegistration.username}
            onChange={handleInput}
            name='username'
            id='username'
          />
        </div>

        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            autoComplete='off'
            value={userRegistration.email}
            onChange={handleInput}
            name='email'
            id='email'
          />
        </div>

        <div>
          <label htmlFor='phone'>Telephone</label>
          <input
            type='text'
            autoComplete='off'
            value={userRegistration.phone}
            onChange={handleInput}
            name='phone'
            id='phone'
          />
        </div>

        <div>
          <label htmlFor='skills'>Skills</label>
          <input
            type='text'
            autoComplete='off'
            value={userRegistration.skills}
            onChange={handleInput}
            name='skills'
            id='skills'
          />
        </div>

        <button type='submit'>Signup</button>
      </form>

      <div>
        {records.map((curElem) => {
          const { id, username, email, phone, skills } = curElem;
          return (
            <div className='showDataStyle' key={id}>
              <p>{username}</p>
              <p>{email}</p>
              <p>{phone}</p>
              <p>{skills}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RegistrationForm;
