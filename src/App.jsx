import { useState , useRef} from 'react'
import './App.css'

function App() {
  const [displayLogin, setLogin] = useState(false);
  const username = useRef(null);
  const password = useRef(null);
  const [txt , setTxt] = useState(null);
  const handler = (event)=>{
    event.preventDefault();
    const userName = username.current.value;
    const pass =  password.current.value;
    if(userName === 'user' && pass === 'password'){
      setLogin(true);
    }
    else if(userName == '' || pass ==''){
      setTxt("");
    }
    else {
      setTxt("Invalid username or password");
    }
  }
  return (
    displayLogin ?
      <div><p>Welcome, user!</p></div>
      :
      <div>
        <h1>Login Page</h1>
        <form >
        <p>{txt}</p>
        <div>
        <label>UserName:</label>
        <input ref={username} type="text" placeholder='username' required></input>
        </div>
        <div>
        <label>Password:</label>
        <input ref={password} type="password" placeholder='password' required></input>
        </div>
        <button onClick={handler} type='submit'>Submit</button>
        </form>
      </div>
  )
}

export default App
