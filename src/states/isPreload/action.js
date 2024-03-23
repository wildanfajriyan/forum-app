import {
  hideLoading,
  showLoading,
} from 'react-redux-loading-bar';
import { setAuthUserActionCreator } from '../authUser/action';

const ActionType = {
  SET_IS_PRELOAD: 'SET_IS_PRELOAD',
};

function setIsPreloadActionCreator(isPreload) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload,
    },
  };
}

function asyncPreloadProcess() {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const responseAuthUser = await fetch(
        'https://forum-api.dicoding.dev/v1/users/me',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              'accessToken',
            )}`,
          },
        },
      );

      const resultAuthUser = await responseAuthUser.json();

      dispatch(
        setAuthUserActionCreator(resultAuthUser.data.user),
      );
    } catch (error) {
      dispatch(setAuthUserActionCreator(null));
    } finally {
      dispatch(setIsPreloadActionCreator(false));
    }

    dispatch(hideLoading());
  };
}

export {
  ActionType,
  setIsPreloadActionCreator,
  asyncPreloadProcess,
};
