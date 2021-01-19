import { useContext } from 'react';
import Auth from './auth/Auth'
import Navbar from './Navbar'
import { AuthContext } from '../context/AuthContext';

function App() {
  const auth = useContext(AuthContext);

  if (!auth.token) {
    return <Auth />
  }

  return (
    <>
      <Navbar />
      {/* More pages here */}
    </>
  )
}

export default App;
