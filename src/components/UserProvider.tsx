import { useState } from "react"
import User from "../types/User"
import UserContext from "../context/UserContext"


// provider props
type UserProviderProps = {
    children: React.ReactNode
}

// creating user upon login logic
export default function UserProvider({children}: UserProviderProps) {
    const [user, setUser] = useState<User | undefined>(undefined)
    const login = (username: string) => setUser({username})
    const logout = () => setUser(undefined)
  return (
    <UserContext.Provider value ={{user, login, logout}}>
        {children}
    </UserContext.Provider>
  )
}
export {default as UserProvider} from './UserProvider'

