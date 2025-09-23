import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
// Bootstrap CSS 5
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserProvider } from './UseContext/useContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
    <App />
    </UserProvider>
  </StrictMode>,
)
