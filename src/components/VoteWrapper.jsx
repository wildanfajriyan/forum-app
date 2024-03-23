import React from 'react';
import PropTypes from 'prop-types';

function VoteWrapper({ children }) {
  return <div className="flex my-2">{children}</div>;
}

VoteWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default VoteWrapper;
