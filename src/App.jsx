import { useState } from 'react'
import './App.css'

function App() {
  const [userName , setUserName] = useState("");
  const [password , setPassword] = useState("");
  const [error , setError] = useState("");
  const [isSubmitted , setIsSubmitted] = useState(false);
  const handler = (event)=>{
    event.preventDefault();
    if(userName === 'user' && password === 'password'){
      setError("");
      setIsSubmitted(true);
    }
    else {
      setError("Invalid username or password");
      setIsSubmitted(false);
    }
  }
  return(
    <div>
      <h1>Login Page</h1>
      {isSubmitted?
      (
      <div>
        <p>Welcome, {userName}</p>
      </div>  
      )
      :
      (
      <form onSubmit={handler}>
        {error && <p className='error'>{error}</p>}
        <div>
          <label htmlFor='username'>Username:</label>
          <input
            type="text"
            id="username"
            placeholder='username'
            value={userName}
            onChange={(e)=>{
              setUserName(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type="password"
            id="password"
            placeholder='password'
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      )}
    </div>
  )
}

export default App
