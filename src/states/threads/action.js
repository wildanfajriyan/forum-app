/* eslint-disable no-alert */
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  UP_VOTE_THREAD: 'UP_VOTE_THREAD',
  NEUTRALIZE_THREAD_VOTE: 'NEUTRALIZE_THREAD_VOTE',
  DOWN_VOTE_THREAD: 'DOWN_VOTE_THREAD',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function upVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.UP_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function neutralizeThreadActionCreator({
  threadId,
  userId,
  vote,
}) {
  return {
    type: ActionType.NEUTRALIZE_THREAD_VOTE,
    payload: {
      threadId,
      userId,
      vote,
    },
  };
}

function downThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.DOWN_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncAddThread({ title, body, category }) {
  return async (dispatch) => {
    try {
      const thread = await api.createThread({
        title,
        body,
        category,
      });

      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncUpVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(
      upVoteThreadActionCreator({
        threadId,
        userId: authUser.id,
      }),
    );

    try {
      await api.upVote(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(
        upVoteThreadActionCreator({
          threadId,
          userId: authUser.id,
        }),
      );
    }
  };
}

function asyncNeutralizeVoteThread(threadId, vote) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(
      neutralizeThreadActionCreator({
        threadId,
        userId: authUser.id,
        vote,
      }),
    );

    try {
      await api.neutralizeVote(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(
        neutralizeThreadActionCreator({
          threadId,
          userId: authUser.id,
          vote,
        }),
      );
    }
  };
}

function asyncDownVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(
      downThreadActionCreator({
        threadId,
        userId: authUser.id,
      }),
    );

    try {
      await api.downVote(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(
        downThreadActionCreator({
          threadId,
          userId: authUser.id,
        }),
      );
    }
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  asyncAddThread,
  asyncUpVoteThread,
  asyncNeutralizeVoteThread,
  asyncDownVoteThread,
};
