import { ActionType } from './action';

function addThreadComponentReducer(isAdd = false, action = {}) {
  switch (action.type) {
    case ActionType.TOGGLE_ADD_THREAD_COMPONENT:
      return !action.payload.isAdd;
    default:
      return isAdd;
  }
}

export default addThreadComponentReducer;
