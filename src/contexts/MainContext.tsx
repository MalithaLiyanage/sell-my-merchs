import React, {useState, createContext} from 'react'
import { MainContextType } from '../interfaces/ContextInterfaces';
import { User } from '../interfaces/Models';

const initialUser = {
    fName: 'Justin',
    mName: 'Peter',
    lName: 'Griffin',
    age: 40,
    address: 'Quahog',
    email: 'peter@gmail.com',
    phoneNumber: '+1234567890',
}

export const MainContext = createContext<MainContextType | null>(null);

export const MainContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User>(initialUser);

    return <MainContext.Provider value={{ user, setUser }}>{children}</MainContext.Provider>;
}   