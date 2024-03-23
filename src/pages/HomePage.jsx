import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import QuestionBox from '../components/QuestionBox';
import ThreadsList from '../components/ThreadsList';
import asyncPopulateUsersAndThreads from '../states/shared/action';
import Wrapper from '../components/Wrapper';
import { asyncPopulateLeaderboards } from '../states/leaderboards/action';
import SideLeaderboards from '../components/SideLeaderboards';
import { useAuthUser } from '../hooks/useAuthUser';
import {
  asyncUpVoteThread,
  asyncNeutralizeVoteThread,
  asyncDownVoteThread,
} from '../states/threads/action';

function HomePage() {
  const authUser = useAuthUser();
  const threads = useSelector((states) => states.threads);
  const users = useSelector((states) => states.users);
  const leaderboards = useSelector(
    (states) => states.leaderboards,
  );
  const isAdd = useSelector((states) => states.isAdd);

  const dispatch = useDispatch();

  const onUpVote = (threadId) => {
    dispatch(asyncUpVoteThread(threadId));
  };

  const onNeutralizeVote = (threadId, vote) => {
    dispatch(asyncNeutralizeVoteThread(threadId, vote));
  };

  const onDownVote = (threadId) => {
    dispatch(asyncDownVoteThread(threadId));
  };

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
    dispatch(asyncPopulateLeaderboards());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
  }));

  return (
    <Wrapper>
      <div className="flex justify-between">
        <div className="basis-2/3">
          <QuestionBox isAdd={isAdd} />
          <ThreadsList
            authUser={authUser}
            threads={threadList}
            upVote={onUpVote}
            neutralizeVote={onNeutralizeVote}
            downVote={onDownVote}
          />
        </div>
        <aside className="basis-1/4">
          <SideLeaderboards leaderboards={leaderboards} />
        </aside>
      </div>
    </Wrapper>
  );
}

export default HomePage;
