import { useAuthContext } from "./useAuthContext";

//we can just delete user from local storage, no need to send request to backend  to log out
export const useLogout = () => {
    const { dispatch } = useAuthContext();
  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");
    //dispatch logout action
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};
