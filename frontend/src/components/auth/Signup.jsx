import { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import * as api from '../../services/sessions';
import Input from '../common/Input';
import Button from '../common/Button';
import Spacer from '../common/Spacer';

export default function Signup() {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    api.signup({ email, password }).then(res => {
      auth.login(res.token)
    }).catch(err => {
      setError(err.message)
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
      {error && <ErrorMessage error={error} />}
      <Spacer mb={24} />
      <div>
        <Button block>Sign up</Button>
      </div>
      <Spacer mb={40} />
      <div>
        <span>Already have an account?  </span>
        <Link to="/login">Log in</Link>
      </div>
    </form>
  )
}

function ErrorMessage({ error }) {
  return (
    <>
      <Spacer mt={24} />
      <div style={{ color: "red" }}>{error}</div>
    </>
  )
}