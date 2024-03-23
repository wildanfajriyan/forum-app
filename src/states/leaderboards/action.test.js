/* eslint-disable no-self-assign */
/**
 * skenario test
 *
 * - asyncPopulateLeaderboards thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import {
  describe,
  it,
  expect,
  beforeEach,
  afterEach,
  vi,
} from 'vitest';
import {
  hideLoading,
  showLoading,
} from 'react-redux-loading-bar';
import api from '../../utils/api';
import {
  receiveLeaderboardsActionCreator,
  asyncPopulateLeaderboards,
} from './action';

const fakeLeaderboardsResponse = [
  {
    user: {
      id: 'users-1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 10,
  },
];

const fakeErrorResponse = new Error(
  'Ups, something went wrong',
);

describe('asyncPopulateLeaderboards', () => {
  beforeEach(() => {
    api.getAllLeaderboards = api.getAllLeaderboards;
  });

  afterEach(() => {
    api.getAllLeaderboards = api.getAllLeaderboards;

    delete api.getAllLeaderboards;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    api.getAllLeaderboards = () => Promise.resolve(fakeLeaderboardsResponse);

    //   mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncPopulateLeaderboards()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveLeaderboardsActionCreator(
        fakeLeaderboardsResponse,
      ),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    api.getAllLeaderboards = () => Promise.reject(fakeErrorResponse);

    //   mock dispatch
    const dispatch = vi.fn();

    // windows dispatch
    window.alert = vi.fn();

    // action
    await asyncPopulateLeaderboards()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(
      fakeErrorResponse.message,
    );
  });
});
