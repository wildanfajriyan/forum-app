import React from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import ThreadProfileInfo from './ThreadProfileInfo';
import Vote from './Vote';
import TotalComment from './TotalComment';
import { userShape, commentsShape } from '../utils';
import VoteWrapper from './VoteWrapper';
import CommentsList from './CommentsList';
import CommentsWrapper from './CommentsWrapper';
import AddNewComment from './AddNewComment';

function ThreadDetail({
  id,
  title,
  body,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  comments,
  authUser,
  upVote,
  downVote,
  addComment,
  neutralizeVote,
  upVoteComment,
  neutralizeComment,
  downComment,
}) {
  return (
    <>
      <ThreadProfileInfo
        user={owner}
        createdAt={createdAt}
      />
      <div className="mt-3">
        <h1 className="font-bold">{title}</h1>
        <div className="break-words">
          {parse(`${body}`)}
        </div>
      </div>
      <div className="w-2/3 flex gap-5">
        <VoteWrapper>
          <Vote
            votesBy={upVotesBy}
            isUpVote
            onUpVoteClick={upVote}
            onNeutralizeVoteClick={neutralizeVote}
            threadId={id}
            userId={authUser.id}
          />
          <Vote
            votesBy={downVotesBy}
            onDownVoteClick={downVote}
            onNeutralizeVoteClick={neutralizeVote}
            threadId={id}
            userId={authUser.id}
          />
        </VoteWrapper>
        <div className="flex items-center">
          <TotalComment totalComments={comments.length} />
        </div>
      </div>

      <AddNewComment
        authUser={authUser}
        addComment={addComment}
        threadId={id}
      />

      <CommentsWrapper>
        <CommentsList
          authUser={authUser}
          threadId={id}
          comments={comments}
          upVoteComment={upVoteComment}
          neutralizeComment={neutralizeComment}
          downComment={downComment}
        />
      </CommentsWrapper>
    </>
  );
}

ThreadDetail.propTypes = {
  authUser: PropTypes.shape(userShape).isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string)
    .isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape(commentsShape),
  ).isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  upVote: PropTypes.func.isRequired,
  neutralizeVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  upVoteComment: PropTypes.func.isRequired,
  neutralizeComment: PropTypes.func.isRequired,
  downComment: PropTypes.func.isRequired,
};

export default ThreadDetail;
