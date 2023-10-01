import { Routes, Route, Navigate } from 'react-router-dom'
import { Header } from './components'
import { Home, Game, Games, GameLog } from './pages'
import Login from './pages/Login'
import UserProvider from './components/UserProvider';
import style from './App.module.css'

function App() {
  return (
    <UserProvider>
      <Header />
      <main className={style.main}>
        <div className={style.container}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="game" element={<Game />} />
            <Route path="games" element={<Games />} />
            <Route path="game-log/:gameId" element={<GameLog />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
    </UserProvider>
  )
}

export default App
