import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Wrapper from '../components/Wrapper';
import ThreadWrapper from '../components/ThreadWrapper';
import ThreadDetail from '../components/ThreadDetail';
import { useAuthUser } from '../hooks/useAuthUser';
import {
  asyncUpVoteThreadDetail,
  asyncNeutralizeVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncUpVoteComment,
  asyncNeutralizeVoteComment,
  asyncDownVoteComment,
  asyncAddComment,
  asyncReceiveThreadDetail,
} from '../states/threadDetail/action';

function DetailPage() {
  const { id } = useParams();

  const threadDetail = useSelector(
    (states) => states.threadDetail,
  );

  const authUser = useAuthUser();

  const dispatch = useDispatch();

  const onAddComment = (threadId, content) => {
    dispatch(asyncAddComment(threadId, content));
  };

  const onUpVoteDetail = (threadId) => {
    dispatch(asyncUpVoteThreadDetail(threadId));
  };

  const onNeutralizeVoteDetail = (threadId, vote) => {
    dispatch(
      asyncNeutralizeVoteThreadDetail(threadId, vote),
    );
  };

  const onDownVoteDetail = (threadId) => {
    dispatch(asyncDownVoteThreadDetail(threadId));
  };

  const onUpVoteComment = (threadId, commentId) => {
    dispatch(asyncUpVoteComment(threadId, commentId));
  };

  const onNeutralizeComment = (
    threadId,
    vote,
    commentId,
  ) => {
    dispatch(
      asyncNeutralizeVoteComment(threadId, vote, commentId),
    );
  };

  const onDownComment = (threadId, commentId) => {
    dispatch(asyncDownVoteComment(threadId, commentId));
  };

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  if (!threadDetail) {
    return null;
  }

  return (
    <section>
      <Wrapper>
        <ThreadWrapper>
          <ThreadDetail
            authUser={authUser}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...threadDetail}
            upVote={onUpVoteDetail}
            downVote={onDownVoteDetail}
            addComment={onAddComment}
            neutralizeVote={onNeutralizeVoteDetail}
            upVoteComment={onUpVoteComment}
            neutralizeComment={onNeutralizeComment}
            downComment={onDownComment}
          />
        </ThreadWrapper>
      </Wrapper>
    </section>
  );
}

export default DetailPage;
