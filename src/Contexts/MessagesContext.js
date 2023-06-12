import { createContext, useReducer } from "react";

export const MessagesContext = createContext();

export const messagesReducer = (state,action) => {
    switch(action.type) {
        case 'SET_MESSAGES':
            return {
                messages: action.payload
            }
        case 'SEND_MESSAGE':
            if(state.messages.length > 8){
                state.messages.pop();
            }
            return{
                messages:[action.payload, ...state.messages,]
            }
        default:
            return state
    }
}

export const MessagesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(messagesReducer, {
        messages:[]
    })

    return(
        <MessagesContext.Provider value = {{...state, dispatch}}>
            { children }
        </MessagesContext.Provider>
    )
}