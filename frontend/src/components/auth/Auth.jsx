import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Login from './Login';
import Signup from './Signup';

const AuthWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const AuthContainer = styled.div`
  padding: 80px;
  width: 400px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background: white;
  border-radius: 8px;
`

export default function Auth() {
  return (
    <>
      <AuthWrapper>
        <AuthContainer>
          <Switch>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/signup" exact>
              <Signup />
            </Route>
            <Redirect to="/login"></Redirect>
          </Switch>
        </AuthContainer>
      </AuthWrapper>
    </>
  )
}