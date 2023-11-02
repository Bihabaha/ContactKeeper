import {createContext, useReducer} from "react"
export const ContactContext =createContext()
export const  contactReducer =(state,action)=>{
    switch(action.type){
        case "SET_CONTACTS":
            return {
                contacts:action.payload
            }
            case "CREATE_CONTACT":
                return {
                    contacts:[action.payload,...state.contacts]
                }
                case "REMOVE_CONTACT":
                    return {

                        contacts: state.contacts.filter((c)=>c._id!==action.payload._id)
                    }
                default:
                    return state
    }
}
export  const ContactContextProvider=({children})=>{
    const[state,dispatch]=useReducer(contactReducer,{
        contacts:[]
    })

    return (
        <ContactContext.Provider value={{...state,dispatch}}>
          {children}
        </ContactContext.Provider>
    )

}