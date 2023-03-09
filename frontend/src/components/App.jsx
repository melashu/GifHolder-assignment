import { useContext } from 'react';
import Auth from './auth/Auth'
import Navbar from './Navbar'
import { AuthContext } from '../context/AuthContext';
import Gif from './gif/Gif';
import RouterConfig from './gif/RouterConfig';

function App() {
  const auth = useContext(AuthContext);

  if (!auth.token) {
    return <Auth />
  }

  return (
    <>
      <Navbar />
      <RouterConfig />

      {/* More pages here */}
    </>
  );
}

export default App;
