import { createContext } from "react";

interface User {
    name: string
    age: number
}


export const UserContext = createContext<User | undefined>(undefined); // returns an object with the provider propertie
