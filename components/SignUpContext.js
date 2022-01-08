import React from 'react';
import { createContext, useState } from 'react';

export const SignUpContext = createContext();

export const SignUpContextProvider = ({ children }) => {
  const [signUpInfo, setSignUpInfo] = useState({});
  const updateSignUpInfo = ({
    id,
    password,
    nickName,
    age,
    weight,
    height,
  }) => {
    const info = {
      id: id,
      password: password,
      nickName: nickName,
      age: age,
      weight: weight,
      height: height,
    };
    setSignUpInfo(info);
  };

  return (
    <SignUpContext.Provider value={{ signUpInfo, updateSignUpInfo }}>
      {children}
    </SignUpContext.Provider>
  );
};
