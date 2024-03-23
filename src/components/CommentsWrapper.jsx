import React from 'react';
import PropTypes from 'prop-types';

function CommentsWrapper({ children }) {
  return (
    <div className="mt-5 border-t-2">
      <h2 className="my-4">Komentar</h2>
      {children}
    </div>
  );
}

CommentsWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CommentsWrapper;
