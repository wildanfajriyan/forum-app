/* eslint-disable import/prefer-default-export */
import { useDispatch } from 'react-redux';
import { toggleAddThreadComponent } from '../states/addThreadComponent/action';

export function useToggleAddThreadComponent({ isAdd }) {
  const dispatch = useDispatch();

  return () => dispatch(toggleAddThreadComponent(isAdd));
}
