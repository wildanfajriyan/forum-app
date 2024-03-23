import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { useAuthUser } from '../hooks/useAuthUser';
import { useToggleAddThreadComponent } from '../hooks/useToggleAddThreadComponent';

function QuestionBox({
  isAdd,
}) {
  const authUser = useAuthUser();
  const toggleAddComponent = useToggleAddThreadComponent({ isAdd });

  return (
    <div className="flex gap-3 bg-white my-4 px-5 py-2  border-slate-300 shadow">
      <img
        src={authUser.avatar}
        alt={authUser.id}
        className="rounded-full w-10"
      />
      <Button
        text="Apa yang ingin anda ceritakan..."
        color="slate"
        toggleAddComponent={toggleAddComponent}
        isAdd={isAdd}
      />
    </div>
  );
}

QuestionBox.propTypes = {
  isAdd: PropTypes.bool.isRequired,
};

export default QuestionBox;
