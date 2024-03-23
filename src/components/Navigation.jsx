import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from './Button';
import Wrapper from './Wrapper';
import { useAuthUser } from '../hooks/useAuthUser';
import { useToggleAddThreadComponent } from '../hooks/useToggleAddThreadComponent';
import { asyncUnsetAuthUser } from '../states/authUser/action';

function Navigation() {
  const authUser = useAuthUser();
  const isAdd = useSelector((states) => states.isAdd);
  const toggleAddComponent = useToggleAddThreadComponent({ isAdd });
  const dispatch = useDispatch();

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  return (
    <nav className="w-full bg-white py-2 border-b-1 border-slate-300 shadow">
      <Wrapper>
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="font-caveat font-bold text-4xl"
          >
            Forum
          </Link>
          <div className="flex gap-5 items-center">
            <Link to="/leaderboards">leaderboards</Link>
            <Button
              text="Buat Thread"
              color="green"
              toggleAddComponent={toggleAddComponent}
              isAdd={isAdd}
            />
            <h2 className="font-inter font-bold text-base">
              {authUser.name}
            </h2>
            <button type="button" onClick={onSignOut}>
              logout
            </button>
          </div>
        </div>
      </Wrapper>
    </nav>
  );
}

export default Navigation;
