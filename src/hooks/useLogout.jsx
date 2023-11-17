import { useAuthContext } from "./useAuthContext";
import { useContactContext } from "./useContactContext";

//we can just delete user from local storage, no need to send request to backend  to log out
export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const { dispatch:contactsDispatch } = useContactContext();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");
    //dispatch logout action
    dispatch({ type: "LOGOUT" });
    contactsDispatch({type:"SET_CONTACTS",payload:null})
  };
  return { logout };
};
