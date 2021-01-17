import { useEffect } from 'react'

export default function Home() {
  const token = localStorage.getItem('token')

  useEffect(() => {
    fetch("http://localhost:3000/gifs", {
      headers: {
        "X-Authorization": token
      }
    })
  }, [token])

  return (
    <div>

    </div>
  )
}
