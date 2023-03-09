import { useState, createContext } from "react";
import { USER_STATUS } from "util/constants";
import { signIn, signOut } from "next-auth/react";
import prisma from "@/prisma/client";

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

  const registerUser = async (email, password) => {
    const newUser = prisma.user.create({
      data: {
        email,
        password,
      },
    });
    console.log("signed up: ", newUser);
    const signedIn = await signIn("credentials", {
      email,
      password,
    });
    console.log("signed up in: ", signedIn);
    setUser(signedIn);
  };

  const logIn = async (email, password) => {
    const loggedUser = await signIn("credentials", { email, password });
    console.log("signed in: ", loggedUser);
    setUser(loggedUser);
  };

  const logOut = () => {
    setUser(USER_STATUS.NOT_LOGGED);

    return signOut({ callbackUrl: "http://localhost:3000/login" });
  };

  return (
    <userContext.Provider value={{ user, registerUser, logIn, logOut }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
