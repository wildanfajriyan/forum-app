/* eslint-disable import/prefer-default-export */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncPreloadProcess } from '../states/isPreload/action';

export function useAuthUser() {
  const authUser = useSelector((states) => states.authUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  return authUser;
}
