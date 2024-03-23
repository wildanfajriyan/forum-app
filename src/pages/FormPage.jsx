import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';
import { asyncRegisterUser } from '../states/users/action';
import LoginInput from '../components/LoginInput';
import RegisterInput from '../components/RegisterInput';

function FormPage() {
  const [isLogin, setIsLogin] = useState(true);

  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(
      asyncSetAuthUser({
        email,
        password,
      }),
    );
  };

  const onRegister = ({ name, email, password }) => {
    dispatch(
      asyncRegisterUser({
        name,
        email,
        password,
      }),
    );

    setIsLogin(true);
  };

  return (
    <div className="flex items-center justify-center  h-screen bg-slate-200">
      <div className="bg-white p-12 rounded h-[500px]">
        <h1 className="text-center font-caveat text-5xl">
          Forum
        </h1>
        <div className="my-6">
          <button
            type="button"
            className={`mr-3 cursor-pointer ${
              isLogin ? 'font-bold' : 'font-light'
            }`}
            onClick={() => setIsLogin(true)}
          >
            Masuk
          </button>
          <button
            type="button"
            className={`cursor-pointer  ${
              !isLogin ? 'font-bold' : 'font-light'
            }`}
            onClick={() => setIsLogin(false)}
          >
            Daftar
          </button>
          <hr className="mt-3" />
        </div>
        {isLogin && <LoginInput login={onLogin} />}

        {!isLogin && (
          <RegisterInput register={onRegister} />
        )}
      </div>
    </div>
  );
}

export default FormPage;
