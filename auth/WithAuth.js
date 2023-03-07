import { userContext } from "context/user"
import { useRouter } from "next/router"
import { useContext, useEffect } from "react"

export default function WithAuth({ children }) {
  const { user } = useContext(userContext);
  const router = useRouter();

  useEffect(() => {
    if (user?.isAuthenticated === false) router.push("/login");
  }, [user]);

  if (!user?.isAuthenticated) return undefined;

  return <>{children}</>;
}