/* 1월 7일 허준서
회원가입 정보 상태를 관리하기 위한 context api 컴포넌트입니다. */

import React from 'react';
import { createContext, useState } from 'react';

export const SignUpContext = createContext();

export const SignUpContextProvider = ({ children }) => {
  const [signUpInfo, setSignUpInfo] = useState({});

  const setContextId = (id) => {
    setSignUpInfo((prevState) => ({ ...prevState, id }));
  };
  const setContextPassword = (password) => {
    setSignUpInfo((prevState) => ({ ...prevState, password }));
  };
  const setContextNickname = (nickname) => {
    setSignUpInfo((prevState) => ({ ...prevState, nickname }));
  };
  const setContextWeight = (weight) => {
    setSignUpInfo((prevState) => ({ ...prevState, weight }));
  };
  const setContextHeight = (height) => {
    setSignUpInfo((prevState) => ({ ...prevState, height }));
  };
  const setContextAge = (age) => {
    setSignUpInfo((prevState) => ({ ...prevState, age }));
  };

  return (
    <SignUpContext.Provider
      value={{
        signUpInfo,
        setContextId,
        setContextPassword,
        setContextNickname,
        setContextWeight,
        setContextHeight,
        setContextAge,
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
};
