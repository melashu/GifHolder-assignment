
export const signup = (params) => {
  return fetch('http://localhost:3000/signup', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params)
  })
    .then(response => {
      if (!response.ok) {
        return response.json().then(err => {
          throw new Error(err.message)
        })
      }
      return response.json()
    })
}

export const login = (params) => {
  return fetch('http://localhost:3000/login', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params)
  })
    .then(response => {
      if (!response.ok) {
        return response.json().then(err => {
          throw new Error(err.message)
        })
      }
      return response.json()
    })
}