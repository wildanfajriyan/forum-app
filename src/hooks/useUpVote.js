/* eslint-disable import/prefer-default-export */
import { useDispatch } from 'react-redux';
import { asyncUpVoteThread } from '../states/threads/action';

export function useUpVote({ threadId }) {
  const dispatch = useDispatch();

  return () => dispatch(asyncUpVoteThread(threadId));
}
