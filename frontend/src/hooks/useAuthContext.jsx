import { AuthContext } from "../Components/context/AuthContext"
import { useContext } from "react"


export const useAuthContext=()=>{
    const context = useContext(AuthContext)

        if(!context){
            throw Error("useAuthcontext must be used inside authContextProvider")
        }

    return context
}