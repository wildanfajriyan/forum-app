import React from 'react';
import PropTypes from 'prop-types';
import { LuMessageCircle } from 'react-icons/lu';

function TotalComment({ totalComments }) {
  return (
    <>
      <LuMessageCircle />
      <span>{totalComments}</span>
    </>
  );
}

TotalComment.propTypes = {
  totalComments: PropTypes.number.isRequired,
};

export default TotalComment;
