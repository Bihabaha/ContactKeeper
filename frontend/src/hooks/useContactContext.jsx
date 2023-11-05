
import { useContext } from "react";
import { ContactContext } from "../context/ContactContext";

export const useContactContext=()=>{
    const context = useContext(ContactContext)

        if(!context){
            throw Error("useContactcontext must be used inside ContactContextProvider")
        }

    return context
}