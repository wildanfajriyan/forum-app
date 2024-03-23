import React from 'react';
import { useSelector } from 'react-redux';
import Wrapper from '../components/Wrapper';
import ThreadWrapper from '../components/ThreadWrapper';
import LeaderboardItem from '../components/LeaderboardItem';

function LeaderboardsPage() {
  const leaderboards = useSelector(
    (states) => states.leaderboards,
  );

  return (
    <Wrapper>
      <div className="w-2/4 m-auto">
        <ThreadWrapper>
          <h1 className="text-center text-xl font-bold border-b-2 mb-6 pb-4">
            Leaderboards
          </h1>
          {leaderboards.map((leaderboard) => (
            <LeaderboardItem
              key={leaderboard.user.id}
              leaderboard={leaderboard}
            />
          ))}
        </ThreadWrapper>
      </div>
    </Wrapper>
  );
}

export default LeaderboardsPage;
