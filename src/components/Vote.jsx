import React from 'react';
import PropTypes from 'prop-types';
import {
  BiSolidUpvote,
  BiSolidDownvote,
} from 'react-icons/bi';

function Vote({
  isUpVote,
  votesBy,
  onUpVoteClick,
  onNeutralizeVoteClick,
  onDownVoteClick,
  threadId,
  userId,
  commentId,
}) {
  const findUserVoteThread = votesBy.includes(userId);

  return (
    <div className="flex items-center w-10 gap-1 mr-2">
      {isUpVote ? (
        <BiSolidUpvote
          className={
            findUserVoteThread
              ? 'text-lime-500'
              : 'text-slate-400'
          }
          onClick={
            findUserVoteThread
              ? () => onNeutralizeVoteClick(
                threadId,
                'up',
                commentId,
              )
              : () => onUpVoteClick(threadId, commentId)
          }
        />
      ) : (
        <BiSolidDownvote
          className={
            findUserVoteThread
              ? 'text-lime-500'
              : 'text-slate-400'
          }
          onClick={
            findUserVoteThread
              ? () => onNeutralizeVoteClick(
                threadId,
                'down',
                commentId,
              )
              : () => onDownVoteClick(threadId, commentId)
          }
        />
      )}
      <span>{votesBy.length}</span>
    </div>
  );
}

Vote.propTypes = {
  isUpVote: PropTypes.bool,
  votesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  onUpVoteClick: PropTypes.func,
  onNeutralizeVoteClick: PropTypes.func,
  onDownVoteClick: PropTypes.func,
  threadId: PropTypes.string,
  userId: PropTypes.string,
  commentId: PropTypes.string,
};

Vote.defaultProps = {
  isUpVote: false,
  onUpVoteClick: null,
  onNeutralizeVoteClick: null,
  onDownVoteClick: null,
  threadId: '',
  userId: '',
  commentId: '',
};

export default Vote;
