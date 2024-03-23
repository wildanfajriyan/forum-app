/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form>
      <div className="flex flex-col mb-5">
        <label htmlFor="Nama" className="mb-2">
          Nama
        </label>
        <input
          name="Nama"
          type="text"
          placeholder="Nama"
          value={name}
          onChange={onNameChange}
          className="px-2 py-1 border border-slate-600 rounded-sm focus:outline-none w-72 h-8"
        />
      </div>
      <div className="flex flex-col mb-5">
        <label htmlFor="Email" className="mb-2">
          Email
        </label>
        <input
          name="Email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={onEmailChange}
          className="px-2 py-1 border border-slate-600 rounded-sm focus:outline-none w-72 h-8"
        />
      </div>
      <div className="flex flex-col mb-5">
        <label htmlFor="Password" className="mb-2">
          Password
        </label>
        <input
          name="Password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={onPasswordChange}
          className="px-2 py-1 border border-slate-600 rounded-sm focus:outline-none w-72 h-8"
        />
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          className="bg-blue-200 rounded-full py-1 px-4"
          onClick={() => register({ name, email, password })}
        >
          Register
        </button>
      </div>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
