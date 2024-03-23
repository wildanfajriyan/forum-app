import React from 'react';
import PropTypes from 'prop-types';
import { postedAt, userShape } from '../utils';

function ThreadProfileInfo({ user, createdAt }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={user.avatar}
        alt="avatar"
        className="rounded-full w-10"
      />
      <div className="flex flex-col">
        <span className="font-bold font-inter">
          {user.name}
        </span>
        <span className="font-light text-xs font-inter">
          {postedAt(createdAt)}
        </span>
      </div>
    </div>
  );
}

ThreadProfileInfo.propTypes = {
  user: PropTypes.shape(userShape).isRequired,
  createdAt: PropTypes.string,
};

ThreadProfileInfo.defaultProps = {
  createdAt: '',
};

export default ThreadProfileInfo;
