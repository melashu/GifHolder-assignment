import { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import * as api from '../../services/sessions';
import Input from '../common/Input';
import Button from '../common/Button';
import Spacer from '../common/Spacer';

export default function Login() {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    api.login({ email, password }).then(res => {
      auth.login(res.token)
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <div>Email</div>
        <Spacer mb={8} />
        <Input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <Spacer mb={24} />
      <label>
        <div>Password</div>
        <Spacer mb={8} />
        <Input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <Spacer mb={24} />
      <div>
        <Button block>Log in</Button>
      </div>
      <Spacer mb={40} />
      <div>
        <span>Don't have an account?  </span>
        <Link to="/signup">Sign up</Link>
      </div>
    </form>
  )
}