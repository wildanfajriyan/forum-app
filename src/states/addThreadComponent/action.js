const ActionType = {
  TOGGLE_ADD_THREAD_COMPONENT: 'TOGGLE_ADD_THREAD_COMPONENT',
};

function toggleAddThreadComponent(isAdd) {
  return {
    type: ActionType.TOGGLE_ADD_THREAD_COMPONENT,
    payload: {
      isAdd,
    },
  };
}

export { ActionType, toggleAddThreadComponent };
