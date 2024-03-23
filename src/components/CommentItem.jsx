import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import ThreadProfileInfo from './ThreadProfileInfo';
import Vote from './Vote';
import VoteWrapper from './VoteWrapper';
import { commentsShape, userShape } from '../utils';

function CommentItem({
  authUser,
  threadId,
  comment,
  upVoteComment,
  neutralizeComment,
  downComment,
}) {
  return (
    <div key={comment.id} className="mb-4 py-4 border-b-2">
      <ThreadProfileInfo
        user={comment.owner}
        createdAt={comment.createdAt}
      />
      <div>{parse(`${comment.content}`)}</div>
      <VoteWrapper>
        <Vote
          votesBy={comment.upVotesBy}
          isUpVote
          onUpVoteClick={upVoteComment}
          onNeutralizeVoteClick={neutralizeComment}
          commentId={comment.id}
          userId={authUser.id}
          threadId={threadId}
        />
        <Vote
          votesBy={comment.downVotesBy}
          onDownVoteClick={downComment}
          onNeutralizeVoteClick={neutralizeComment}
          commentId={comment.id}
          userId={authUser.id}
          threadId={threadId}
        />
      </VoteWrapper>
    </div>
  );
}

CommentItem.propTypes = {
  authUser: PropTypes.shape(userShape).isRequired,
  comment: PropTypes.shape(commentsShape).isRequired,
  threadId: PropTypes.string.isRequired,
  upVoteComment: PropTypes.func.isRequired,
  neutralizeComment: PropTypes.func.isRequired,
  downComment: PropTypes.func.isRequired,
};

export default CommentItem;
