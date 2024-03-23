/* eslint-disable no-alert */
import {
  hideLoading,
  showLoading,
} from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_LEADERBOARDS: 'RECEIVE_LEADERBOARDS',
};

function receiveLeaderboardsActionCreator(leaderboards) {
  return {
    type: ActionType.RECEIVE_LEADERBOARDS,
    payload: {
      leaderboards,
    },
  };
}

function asyncPopulateLeaderboards() {
  return async (dispacth) => {
    dispacth(showLoading());

    try {
      const leaderboards = await api.getAllLeaderboards();

      dispacth(
        receiveLeaderboardsActionCreator(leaderboards),
      );
    } catch (error) {
      alert(error.message);
    }

    dispacth(hideLoading());
  };
}

export {
  ActionType,
  receiveLeaderboardsActionCreator,
  asyncPopulateLeaderboards,
};
