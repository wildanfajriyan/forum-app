import React from 'react';
import PropTypes from 'prop-types';
import ThreadProfileInfo from './ThreadProfileInfo';
import { leaderboardsShape } from '../utils';

function LeaderboardItem({ leaderboard }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <ThreadProfileInfo user={leaderboard.user} />
      <span className="font-bold">{leaderboard.score}</span>
    </div>
  );
}
LeaderboardItem.propTypes = {
  leaderboard: PropTypes.shape(leaderboardsShape)
    .isRequired,
};

export default LeaderboardItem;
