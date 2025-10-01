import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {


  const [accessToken, setAccessToken] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [userData, setUserData] = useState(null);


  useEffect(() => {
    const token = localStorage.getItem('access_token');
    const session = localStorage.getItem('session_id');
    if (token && session) {
      setAccessToken(token);
      setSessionId(session);
    }
  }, []);

  useEffect(() => {
    if (accessToken && sessionId) {
      localStorage.setItem('access_token', accessToken);
      localStorage.setItem('session_id', sessionId);
    }
  }, [accessToken, sessionId]);


  // const [ContextHomeDataAPI, setContextHomeDataAPI] = useState();

    const [ContextHomeDataAPI, setContextHomeDataAPI] = useState(() => {
    const savedData = localStorage.getItem('ContextHomeDataAPI');
    return savedData ? JSON.parse(savedData) : null;
  });


useEffect(() => {
  if (ContextHomeDataAPI) {
    localStorage.setItem('ContextHomeDataAPI', JSON.stringify(ContextHomeDataAPI));
  }
}, [ContextHomeDataAPI]);


  const [ContextFaqsDataAPI, setContextFaqsDataAPI] = useState();
  const [ContextMyRewardDataAPI, setContextMyRewardDataAPI] = useState();
  const [ContextInviteRefferAPI, setContextInviteRefferAPI] = useState();
  const [AuthLocal, setAuthLocal] = useState();
  const [MeterUpdateData, setMeterUpdateData] = useState();
  const [ContextSpclOffer, setContextSpclOffer] = useState();
  return (
    <UserContext.Provider
      value={{
        accessToken,
        setAccessToken,
        sessionId,
        setSessionId,
         userData, setUserData,
        ContextHomeDataAPI,
        setContextHomeDataAPI,
        ContextMyRewardDataAPI,
        setContextMyRewardDataAPI,
        ContextFaqsDataAPI,
        setContextFaqsDataAPI,
        ContextInviteRefferAPI,
        setContextInviteRefferAPI,MeterUpdateData, setMeterUpdateData,
        ContextSpclOffer, setContextSpclOffer,
       
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
