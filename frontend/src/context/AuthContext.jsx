import React, { useState } from 'react'

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token'))

  const login = (token) => {
    localStorage.setItem('token', token)
    setToken(token)
  }

  const logout = (token) => {
    localStorage.removeItem('token', token)
    setToken(null)
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
