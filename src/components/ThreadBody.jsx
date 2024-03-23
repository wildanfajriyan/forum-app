import React from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function ThreadBody({ id, title, body }) {
  const navigate = useNavigate();

  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  const onThreadPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(`/threads/${id}`);
    }
  };

  return (
    <div
      className="mt-3 font-bold font-inter"
      role="button"
      tabIndex={0}
      onClick={onThreadClick}
      onKeyDown={onThreadPress}
    >
      <h1>{title}</h1>
      <div
        style={{
          display: '-webkit-box',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          fontFamily: 'Inter',
          fontWeight: 'lighter',
        }}
      >
        {parse(`${body}`)}
      </div>
    </div>
  );
}

ThreadBody.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default ThreadBody;
