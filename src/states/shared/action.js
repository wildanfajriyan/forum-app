/* eslint-disable no-alert */
import {
  showLoading,
  hideLoading,
} from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveUsersActionCreator } from '../users/action';
import { receiveThreadsActionCreator } from '../threads/action';

function asyncPopulateUsersAndThreads() {
  return async (dispacth) => {
    dispacth(showLoading());

    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();

      dispacth(receiveUsersActionCreator(users));
      dispacth(receiveThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }

    dispacth(hideLoading());
  };
}

export default asyncPopulateUsersAndThreads;
