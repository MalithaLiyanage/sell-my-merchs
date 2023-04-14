import { User } from "./Models";

export interface MainContextType {
    user: User | null,
    setUser: React.Dispatch<React.SetStateAction<User>>,
}