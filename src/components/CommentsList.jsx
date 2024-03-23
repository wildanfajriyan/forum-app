import React from 'react';
import PropTypes from 'prop-types';
import { userShape, commentsShape } from '../utils';
import CommentItem from './CommentItem';

function CommentsList({
  authUser,
  threadId,
  comments,
  upVoteComment,
  neutralizeComment,
  downComment,
}) {
  return (
    <>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          authUser={authUser}
          threadId={threadId}
          comment={comment}
          upVoteComment={upVoteComment}
          neutralizeComment={neutralizeComment}
          downComment={downComment}
        />
      ))}
    </>
  );
}

CommentsList.propTypes = {
  authUser: PropTypes.shape(userShape).isRequired,
  threadId: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(commentsShape)).isRequired,
  upVoteComment: PropTypes.func.isRequired,
  neutralizeComment: PropTypes.func.isRequired,
  downComment: PropTypes.func.isRequired,
};

export default CommentsList;
