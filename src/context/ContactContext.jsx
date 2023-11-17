import { createContext, useReducer } from "react";
export const ContactContext = createContext();
export const contactReducer = (state, action) => {
  switch (action.type) {
    case "SET_CONTACTS":
      return {
        contacts: action.payload,
      };
    case "CREATE_CONTACT":
      return {
        contacts: [action.payload, ...state.contacts||[]],
      };
    case "REMOVE_CONTACT":
      return {
        contacts: state.contacts.filter((c) => c._id !== action.payload._id),
      };
      case 'UPDATE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact._id === action.payload._id ? action.payload : contact
        ),

      };
      case 'SEARCH_CONTACT':
        return {
          ...state,
          searched: state.contacts.filter((contact) => {
            const regex = new RegExp(`${action.payload}`, 'gi');
            return contact.fullName.match(regex) || contact.address.match(regex);
          }),
        };
      case 'CLEAR_SEARCH':
        return {
          ...state,
          searched: null}
      default:
        return state;
      
   
  }
};
export const ContactContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contactReducer, {
    contacts: null,
    search:null
  });

  return (
    <ContactContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ContactContext.Provider>
  );
};
