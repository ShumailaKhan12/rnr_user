import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../UseContext/useContext';
// import { useSelector } from 'react-redux';

const useAuthStatus = () => {
    // const { user } = useSelector(state => state.auth)
    const { accessToken, sessionId} = useContext(UserContext);

    const [checkUser, setCheckUser] = useState(true)
    const [isloggedIn, setIsLoggedIn] = useState(false)


  useEffect(() => {
    if (accessToken && sessionId) {
        setIsLoggedIn(true);
    } else {
        setIsLoggedIn(false);
    }
    setCheckUser(false);
}, [accessToken, sessionId]); 
    return { checkUser, isloggedIn }

}

export default useAuthStatus