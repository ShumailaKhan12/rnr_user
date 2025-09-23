import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../UseContext/useContext';

const Dummy = () => {
  const navigate = useNavigate();
  const { setAccessToken, setSessionId } = useContext(UserContext);

  const handleClick = () => {
    const dummyToken = "dummy_token_8281";
    const dummySession = "dummy_session_8281";

    sessionStorage.setItem('access_token', dummyToken);
    sessionStorage.setItem('session_id', dummySession);


    setAccessToken(dummyToken);
    setSessionId(dummySession);

  
    navigate('/');
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
      <button className="btn btn-primary btn-lg" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
};

export default Dummy;
