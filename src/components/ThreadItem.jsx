import React from 'react';
import PropTypes from 'prop-types';
import ThreadBody from './ThreadBody';
import ThreadProfileInfo from './ThreadProfileInfo';
import ThreadWrapper from './ThreadWrapper';
import Vote from './Vote';
import TotalComment from './TotalComment';
import { userShape } from '../utils';
import VoteWrapper from './VoteWrapper';

function ThreadItem({
  id,
  title,
  body,
  createdAt,
  totalComments,
  upVotesBy,
  downVotesBy,
  user,
  authUser,
  upVote,
  neutralizeVote,
  downVote,
}) {
  // const upVote = useUpVote;

  return (
    <ThreadWrapper>
      <ThreadProfileInfo
        user={user}
        createdAt={createdAt}
      />
      <ThreadBody id={id} title={title} body={body} />
      <div className="w-2/3 flex gap-5">
        <VoteWrapper>
          <Vote
            votesBy={upVotesBy}
            isUpVote
            onUpVoteClick={upVote}
            onNeutralizeVoteClick={neutralizeVote}
            userId={authUser.id}
            threadId={id}
          />
          <Vote
            votesBy={downVotesBy}
            onDownVoteClick={downVote}
            onNeutralizeVoteClick={neutralizeVote}
            userId={authUser.id}
            threadId={id}
          />
        </VoteWrapper>
        <div className="flex items-center">
          <TotalComment totalComments={totalComments} />
        </div>
      </div>
    </ThreadWrapper>
  );
}

ThreadItem.propTypes = {
  authUser: PropTypes.shape(userShape).isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string)
    .isRequired,
  user: PropTypes.shape(userShape).isRequired,
  upVote: PropTypes.func.isRequired,
  neutralizeVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
};

export default ThreadItem;
