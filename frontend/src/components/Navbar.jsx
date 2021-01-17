import styled from 'styled-components';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Button from './common/Button';

const Nav = styled.nav`
  height: 64px;
  z-index: 8;
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  box-shadow: 0 1px 4px rgba(0,0,0,.1);
  padding: 0 16px;
  box-sizing: border-box;
`;

export default function Navbar() {
  const auth = useContext(AuthContext)

  return (
    <Nav>
      <div></div>
      <Button onClick={auth.logout}>Logout</Button>
    </Nav>
  )
}
