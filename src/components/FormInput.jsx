import React from 'react';
import PropTypes from 'prop-types';

function FormInput({
  label,
  placeholder,
  value,
  height,
  onChange,
  isFull,
  isPassword,
}) {
  return (
    <div className="flex flex-col mb-5">
      <label htmlFor={label} className="mb-2">
        {label}
      </label>
      <input
        name={label}
        type={isPassword ? 'password' : 'text'}
        required
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`px-3 py-1 border border-slate-600 rounded-sm focus:outline-none w-72 h-${height} ${
          isFull && 'w-full'
        }`}
      />
    </div>
  );
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  height: PropTypes.number,
  isFull: PropTypes.bool,
  isPassword: PropTypes.bool,
};

FormInput.defaultProps = {
  placeholder: '',
  height: 10,
  isFull: false,
  isPassword: false,
};

export default FormInput;
