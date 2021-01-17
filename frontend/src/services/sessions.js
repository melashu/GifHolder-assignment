
export const signup = (params) => {
  return fetch('http://localhost:3000/signup', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params)
  })
    .then(data => data.json())
}

export const login = (params) => {
  return fetch('http://localhost:3000/login', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params)
  })
    .then(data => data.json())
}