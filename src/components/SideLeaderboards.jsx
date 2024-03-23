import React from 'react';
import PropTypes from 'prop-types';
import ThreadWrapper from './ThreadWrapper';
import LeaderboardItem from './LeaderboardItem';
import { leaderboardsShape } from '../utils/index';

function SideLeaderboards({ leaderboards }) {
  return (
    <ThreadWrapper>
      <article>
        <h1 className="text-center font-bold border-b-2 pb-2 mb-4">
          Leaderboards
        </h1>
        {leaderboards
          .slice(0, 3)
          .filter(
            (leaderboard) => leaderboard.score >= 5
              || leaderboard.score >= 0,
          )
          .map((leaderboard) => (
            <LeaderboardItem
              key={leaderboard.user.id}
              leaderboard={leaderboard}
            />
          ))}
      </article>
    </ThreadWrapper>
  );
}

SideLeaderboards.propTypes = {
  leaderboards: PropTypes.arrayOf(
    PropTypes.shape(leaderboardsShape),
  ).isRequired,
};

export default SideLeaderboards;
