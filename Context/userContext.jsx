import { useState } from "react";
import { createContext } from "react";

export const userCredential = createContext(null);


function UserContextProvider ({ children }) {
    const [user, setUser] = useState(null);
  return (
    <userCredential.Provider value={{ user, setUser }}>
      {children}
    </userCredential.Provider>
  );
}
export default UserContextProvider 

