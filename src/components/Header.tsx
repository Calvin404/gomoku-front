import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import style from './Header.module.css'
import UserContext from '../context/UserContext'

export default function Header() {
  const navigate = useNavigate()
  const {user, logout} = useContext(UserContext)

  const getActions = () => {
    if(user) {
      return (
      <>
        <button className={style.action} onClick={() => navigate('gamesHistory')}>Previous Games</button>
        <button className={style.action} onClick={() => logout()}>Logout</button>
      </>
      )
    } else {
      return <button className={style.action} onClick={() => navigate('login')}>Login</button>
    }
  }


  return (
    <header className={style.header}>
      <div className={style.container}>
        <Link to="/">Gomoku</Link>
        <div className={style.actions}>
          <button className={style.action} onClick={() => navigate('/games')}>
            Previous Games
          </button>
          <div className={style.actions}>
            {getActions()}
          </div>
        </div>
      </div>
    </header>
  )
}
