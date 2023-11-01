import { useContext } from "react"
import { AuthContext } from "../Components/context/AuthContext"


export const useAuthContext=()=>{
    const context = useContext(AuthContext)

        if(!context){
            throw Error("useAuthcontext must be used inside authContextProvider")
        }

    return context
}