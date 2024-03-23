import React from 'react';
import PropTypes from 'prop-types';

function Button({
  text,
  color,
  toggleAddComponent,
  isAdd,
}) {
  const colorVariants = {
    slate: 'bg-slate-300',
    green: 'bg-green-600',
  };

  return (
    <button
      type="button"
      className={`w-full ${colorVariants[color]} rounded-full px-4 py-2 font-inter text-sm font-bold text-slate-50`}
      onClick={() => toggleAddComponent(isAdd)}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  toggleAddComponent: PropTypes.func,
  isAdd: PropTypes.bool,
};

Button.defaultProps = {
  color: '',
  toggleAddComponent: null,
  isAdd: false,
};

export default Button;
