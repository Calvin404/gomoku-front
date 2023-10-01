import { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../context/UserContext'
import Button from '../components/Button'
import Input from '../components/Input'
import users from '../data/users.json'
import LogStatus from '../components/LogStatus'
import style from './Login.module.css'

// login page logic, uses username and password given by user and checks if they match saved users
export default function Login() {
  const navigate = useNavigate()
  const {login} = useContext(UserContext)
  const[username, setUsername] = useState('')
  const[password, setPassword] = useState('')
  const [IsValid, setIsValid] = useState(false)

  const checkLogin = () => {
    const user = users.find(
      (u) => u.username === username && u.password === password)

      // if user matches, login with that username and redirect home
   if (!user){
    setIsValid(true)
   } else {
    login(username)
    navigate('/')
   }
  }

  // creates input boxes and submit button 
  return (
    <form className={style.container} onSubmit={(e) => {
      e.preventDefault() // so its not shown in url
      checkLogin()
    }}>

      {IsValid && (<LogStatus variant="error" LogStatus="Invalid username or password, please try again" />)}

      <Input name="username" placeholder="Username" value={username} onChange={(e) => {
        setUsername(e.target.value)
        setIsValid(false)
        }}/>
      <Input name="password" placeholder="Password" type={'password'} value={password} onChange={(e) => {
        setPassword(e.target.value)
        setIsValid(false)
        }} />
      <Button type="submit">Login</Button>
    </form>
  )
}

