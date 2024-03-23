/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react';
import {
  describe,
  it,
  expect,
  afterEach,
  vi,
} from 'vitest';
import {
  render,
  screen,
  cleanup,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import LoginInput from './LoginInput';

expect.extend(matchers);

describe('LoginInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle email typing correctly', async () => {
    // arrange
    render(<LoginInput login={() => {}} />);
    const emailInput = await screen.getByPlaceholderText(
      'Email',
    );

    // action
    await userEvent.type(emailInput, 'emailtest');

    // assert
    expect(emailInput).toHaveValue('emailtest');
  });

  it('should handle password typing correctly', async () => {
    // arrange
    render(<LoginInput login={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText(
      'Password',
    );

    // action
    await userEvent.type(passwordInput, 'passwordtest');

    // assert
    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call login function when login button is clicked', async () => {
    // arrange
    const mockLogin = vi.fn();
    render(<LoginInput login={mockLogin} />);
    const emailInput = await screen.getByPlaceholderText(
      'Email',
    );
    await userEvent.type(emailInput, 'emailtest');
    const passwordInput = await screen.getByPlaceholderText(
      'Password',
    );
    await userEvent.type(passwordInput, 'passwordtest');
    const loginButton = await screen.getByRole('button', {
      name: 'Login',
    });

    // action
    await userEvent.click(loginButton);

    // assert
    expect(mockLogin).toBeCalledWith({
      email: 'emailtest',
      password: 'passwordtest',
    });
  });
});
