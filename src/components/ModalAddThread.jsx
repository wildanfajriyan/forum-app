import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddThread from './AddThread';
import { useToggleAddThreadComponent } from '../hooks/useToggleAddThreadComponent';
import { asyncAddThread } from '../states/threads/action';

function ModalAddThread() {
  const isAdd = useSelector((states) => states.isAdd);
  const toggleAddComponent = useToggleAddThreadComponent({
    isAdd,
  });

  const dispatch = useDispatch();

  const onAddThread = (thread) => {
    dispatch(asyncAddThread(thread));
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isAdd && (
        <AddThread
          addThread={onAddThread}
          toggleAddComponent={toggleAddComponent}
        />
      )}
    </>
  );
}

export default ModalAddThread;
