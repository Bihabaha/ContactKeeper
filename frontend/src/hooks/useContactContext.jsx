import { ContactContext } from "../Components/context/ContactContext";
import { useContext } from "react";

export const useContactContext=()=>{
    const context = useContext(ContactContext)

        if(!context){
            throw Error("useContactcontext must be used inside ContactContextProvider")
        }

    return context
}