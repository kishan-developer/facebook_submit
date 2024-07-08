
import react,{ createContext, useContext, useReducer} from "react";

// creating datalayer (which hold data)

export const StateContext = createContext();

export const StateProvider = ({ reducer , inititalState, children }) => (
    <StateContext.Provider value={ useReducer(reducer, inititalState)} >
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);