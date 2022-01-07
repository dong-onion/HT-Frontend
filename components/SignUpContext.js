import React, { Children } from 'react';
import { createContext, useState } from 'react';

const SignUpContext = createContext();

const SignUpContextProvider = ({ children }) => {
  const [signUpInfo, setSignUpInfo] = useState({});
  const onNext = ({ id, password, nickName, age, weight, height }) => {};

  return (
    <SignUpContext.Provider value={{ signUpInfo, setSignUpInfo }}>
      {children}
    </SignUpContext.Provider>
  );
};
