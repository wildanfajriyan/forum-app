/* eslint-disable no-alert */
import {
  hideLoading,
  showLoading,
} from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  UP_VOTE_THREAD_DETAIL: 'UP_VOTE_THREAD_DETAIL',
  NEUTRALIZE_THREAD_VOTE_DETAIL:
    'NEUTRALIZE_THREAD_VOTE_DETAIL',
  DOWN_VOTE_THREAD_DETAIL: 'DOWN_VOTE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  ADD_COMMENT: 'ADD_COMMENT',
  UP_VOTE_COMMENT: 'UP_VOTE_COMMENT',
  DOWN_VOTE_COMMENT: 'DOWN_VOTE_COMMENT',
  NEUTRALIZE_VOTE_COMMENT: 'NEUTRALIZE_VOTE_COMMENT',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function upVoteThreadDetailActionCreator({
  threadId,
  userId,
}) {
  return {
    type: ActionType.UP_VOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function neutralizeThreadDetailActionCreator({
  threadId,
  userId,
  vote,
}) {
  return {
    type: ActionType.NEUTRALIZE_THREAD_VOTE_DETAIL,
    payload: {
      threadId,
      userId,
      vote,
    },
  };
}

function downThreadDetailActionCreator({
  threadId,
  userId,
}) {
  return {
    type: ActionType.DOWN_VOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function addCommentActionCreator(threadId, comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      threadId,
      comment,
    },
  };
}

function upVoteCommentActionCreator({
  threadId,
  commentId,
  userId,
}) {
  return {
    type: ActionType.UP_VOTE_COMMENT,
    payload: {
      threadId,
      commentId,
      userId,
    },
  };
}

function neutralizeVoteCommentActionCreator({
  threadId,
  commentId,
  vote,
  userId,
}) {
  return {
    type: ActionType.NEUTRALIZE_VOTE_COMMENT,
    payload: {
      threadId,
      commentId,
      vote,
      userId,
    },
  };
}

function downVoteCommentActionCreator({
  threadId,
  commentId,
  userId,
}) {
  return {
    type: ActionType.DOWN_VOTE_COMMENT,
    payload: {
      threadId,
      commentId,
      userId,
    },
  };
}

function asyncAddComment(threadId, content) {
  return async (dispatch) => {
    try {
      const comment = await api.createComment(
        threadId,
        content,
      );

      dispatch(addCommentActionCreator(threadId, comment));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());

    dispatch(clearThreadDetailActionCreator());
    try {
      const detailThread = await api.receiveThreadDetail(
        threadId,
      );

      dispatch(
        receiveThreadDetailActionCreator(detailThread),
      );
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncUpVoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(
      upVoteThreadDetailActionCreator({
        threadId,
        userId: authUser.id,
      }),
    );

    try {
      await api.upVote(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(
        upVoteThreadDetailActionCreator({
          threadId,
          userId: authUser.id,
        }),
      );
    }
  };
}

function asyncNeutralizeVoteThreadDetail(threadId, vote) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(
      neutralizeThreadDetailActionCreator({
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
        neutralizeThreadDetailActionCreator({
          threadId,
          userId: authUser.id,
          vote,
        }),
      );
    }
  };
}

function asyncDownVoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(
      downThreadDetailActionCreator({
        threadId,
        userId: authUser.id,
      }),
    );

    try {
      await api.downVote(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(
        downThreadDetailActionCreator({
          threadId,
          userId: authUser.id,
        }),
      );
    }
  };
}

function asyncUpVoteComment(threadId, commentId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(
      upVoteCommentActionCreator({
        threadId,
        commentId,
        userId: authUser.id,
      }),
    );

    try {
      await api.upVoteComment(threadId, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(
        upVoteCommentActionCreator({
          threadId,
          commentId,
          userId: authUser.id,
        }),
      );
    }
  };
}

function asyncNeutralizeVoteComment(
  threadId,
  vote,
  commentId = null,
) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(
      neutralizeVoteCommentActionCreator({
        threadId,
        commentId,
        vote,
        userId: authUser.id,
      }),
    );

    try {
      await api.neutralizeVoteComment(threadId, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(
        neutralizeVoteCommentActionCreator({
          threadId,
          userId: authUser.id,
          vote,
        }),
      );
    }
  };
}

function asyncDownVoteComment(threadId, commentId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(
      downVoteCommentActionCreator({
        threadId,
        commentId,
        userId: authUser.id,
      }),
    );

    try {
      await api.downVoteComment(threadId, commentId);
    } catch (error) {
      alert(error.message);
      dispatch(
        downVoteCommentActionCreator({
          threadId,
          commentId,
          userId: authUser.id,
        }),
      );
    }
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
  asyncNeutralizeVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncUpVoteComment,
  asyncNeutralizeVoteComment,
  asyncDownVoteComment,
  asyncAddComment,
};
