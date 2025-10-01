
// import React, { createContext, useState, useEffect, useContext } from 'react';

// const AuthFlowContext = createContext();

// export const AuthFlowProvider = ({ children }) => {
//   const [isAllowed, setIsAllowedState] = useState(false);

//   useEffect(() => {
//     const stored = localStorage.getItem('isAllowed');
//     if (stored === 'true') {
//       setIsAllowedState(true);
//     }
//   }, []);

//   const setIsAllowed = (value) => {
//     setIsAllowedState(value);
//     localStorage.setItem('isAllowed', value ? 'true' : 'false');
//   };

//   return (
//     <AuthFlowContext.Provider value={{ isAllowed, setIsAllowed }}>
//       {children}
//     </AuthFlowContext.Provider>
//   );
// };

// export const useAuthFlow = () => useContext(AuthFlowContext);
