import { onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import { useState, createContext, useEffect } from "react"
import { USER_STATUS } from "util/constants";
import { auth } from "@/firebase/app";

export const userContext = createContext();

const UserProvider = ({ children }) => {
  /*
    undefined: User hasn't loaded
    Object: {
      isAuthenticated: bool,
      user: ...
    }
  */
  const [user, setUser] = useState(USER_STATUS.NOT_KNOWN);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setUser({
          isAuthenticated: false,
        });
      } else {
        setUser({
          ...user,
          isAuthenticated: true,
        });
      }
    });

    return () => unsubscribe();
  }, []);

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setUser(USER_STATUS.NOT_LOGGED);
    return signOut(auth);
  };

  return (
    <userContext.Provider value={{ user, registerUser, logIn, logOut }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider
