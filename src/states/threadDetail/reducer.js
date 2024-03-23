import { ActionType } from './action';

function threadDetailReducer(
  threadDetail = null,
  action = {},
) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail;
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
    case ActionType.UP_VOTE_THREAD_DETAIL:
      if (threadDetail.id === action.payload.threadId) {
        return {
          ...threadDetail,
          upVotesBy: threadDetail.upVotesBy.concat([
            action.payload.userId,
          ]),
          downVotesBy: threadDetail.downVotesBy.filter(
            (id) => id !== action.payload.userId,
          ),
        };
      }

      return threadDetail;
    case ActionType.NEUTRALIZE_THREAD_VOTE_DETAIL:
      if (
        threadDetail.id === action.payload.threadId
        && action.payload.vote === 'up'
      ) {
        return {
          ...threadDetail,
          upVotesBy: threadDetail.upVotesBy.filter(
            (id) => id !== action.payload.userId,
          ),
        };
      }

      if (
        threadDetail.id === action.payload.threadId
        && action.payload.vote === 'down'
      ) {
        return {
          ...threadDetail,
          downVotesBy: threadDetail.downVotesBy.filter(
            (id) => id !== action.payload.userId,
          ),
        };
      }

      return threadDetail;
    case ActionType.DOWN_VOTE_THREAD_DETAIL:
      if (threadDetail.id === action.payload.threadId) {
        return {
          ...threadDetail,
          upVotesBy: threadDetail.upVotesBy.filter(
            (id) => id !== action.payload.userId,
          ),
          downVotesBy: threadDetail.downVotesBy.concat([
            action.payload.userId,
          ]),
        };
      }

      return threadDetail;
    case ActionType.ADD_COMMENT:
      if (threadDetail.id === action.payload.threadId) {
        return {
          ...threadDetail,
          comments: [
            action.payload.comment,
            ...threadDetail.comments,
          ],
        };
      }
      return threadDetail;
    case ActionType.UP_VOTE_COMMENT:
      if (threadDetail.id === action.payload.threadId) {
        return {
          ...threadDetail,
          comments: threadDetail.comments.map((comment) => {
            if (comment.id === action.payload.commentId) {
              return {
                ...comment,
                upVotesBy: comment.upVotesBy.concat([
                  action.payload.userId,
                ]),
                downVotesBy: comment.downVotesBy.filter(
                  (id) => id !== action.payload.userId,
                ),
              };
            }

            return comment;
          }),
        };
      }

      return threadDetail;
    case ActionType.NEUTRALIZE_VOTE_COMMENT:
      if (threadDetail.id === action.payload.threadId) {
        return {
          ...threadDetail,
          comments: threadDetail.comments.map((comment) => {
            if (
              comment.id === action.payload.commentId
              && action.payload.vote === 'up'
            ) {
              return {
                ...comment,
                upVotesBy: comment.upVotesBy.filter(
                  (id) => id !== action.payload.userId,
                ),
              };
            }

            if (
              comment.id === action.payload.commentId
              && action.payload.vote === 'down'
            ) {
              return {
                ...comment,
                downVotesBy: comment.downVotesBy.filter(
                  (id) => id !== action.payload.userId,
                ),
              };
            }

            return comment;
          }),
        };
      }

      return threadDetail;
    case ActionType.DOWN_VOTE_COMMENT:
      if (threadDetail.id === action.payload.threadId) {
        return {
          ...threadDetail,
          comments: threadDetail.comments.map((comment) => {
            if (comment.id === action.payload.commentId) {
              return {
                ...comment,
                upVotesBy: comment.upVotesBy.filter(
                  (id) => id !== action.payload.userId,
                ),
                downVotesBy: comment.downVotesBy.concat([
                  action.payload.userId,
                ]),
              };
            }

            return comment;
          }),
        };
      }

      return threadDetail;
    default:
      return threadDetail;
  }
}

export default threadDetailReducer;
