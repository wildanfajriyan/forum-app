import React from 'react';
import PropTypes from 'prop-types';

function ThreadWrapper({ children }) {
  return (
    <div className="my-3">
      <div className="bg-white px-5 py-4 border border-slate-300 shadow font-sans">
        {children}
      </div>
    </div>
  );
}

ThreadWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThreadWrapper;
