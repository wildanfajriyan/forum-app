import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';
import { threadsShape, userShape } from '../utils';

function ThreadsList({
  authUser,
  threads,
  upVote,
  neutralizeVote,
  downVote,
}) {
  return (
    <>
      {threads.map((thread) => (
        <ThreadItem
          key={thread.id}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...thread}
          authUser={authUser}
          upVote={upVote}
          neutralizeVote={neutralizeVote}
          downVote={downVote}
        />
      ))}
    </>
  );
}

ThreadsList.propTypes = {
  authUser: PropTypes.shape(userShape).isRequired,
  threads: PropTypes.arrayOf(PropTypes.shape(threadsShape))
    .isRequired,
  upVote: PropTypes.func.isRequired,
  neutralizeVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
};

export default ThreadsList;
