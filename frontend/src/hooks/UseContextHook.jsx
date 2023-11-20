import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContex";


export const useTheme=()=>{
    const context = useContext(ThemeContext)
    if(context===undefined){
        throw  new Error(" usetheme() must defined inside ThemeProvider")
    }
    return context
}