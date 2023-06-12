import { createContext, useReducer } from 'react'

export const IntentsContext = createContext()

export const intentsReducer = (state, action) => {
    switch(action.type){
        case 'SET_INTENTS':
            return{
                intents: action.payload
            }
        case 'CREATE_INTENT':
            return{
                intents:[action.payload,...state.intents]
            }
        case 'DELETE_INTENT':
            return {
                intents: state.intents.filter(intent => intent._id.$oid !== action.payload._id.$oid),
            }
        case 'ADD_ENTRY':
            {
                const { intentId, new_entry, section} = action.payload;
                const intent = state.intents.find(intent => intent._id.$oid === intentId);
          
                if (intent) {
                    const updatedIntent = { ...intent };

                    if (section === "pattern"){
                        updatedIntent.patterns = [...updatedIntent.patterns, new_entry];
                    }
                    else if(section === "response") {
                        updatedIntent.responses = [...updatedIntent.responses, new_entry];
                    }
                    else{
                        console.log("Something went wrong here");
                    }

                  const updatedIntents = state.intents.map(intent =>
                    intent._id.$oid === intentId ? updatedIntent : intent
                  );

                  return {
                    intents: updatedIntents,
                  };

                }
                return state;
            }
        case 'DELETE_ENTRY':
            {
                const { intentId, entry, section } = action.payload;
                const intent = state.intents.find(intent => intent._id.$oid === intentId);
          
                if (intent) {
                    const updatedIntent = { ...intent };
                    if (section === "pattern"){
                        updatedIntent.patterns = updatedIntent.patterns.filter(pattern=> pattern !== entry);
                    }
                    else if (section === "response"){
                        updatedIntent.responses = updatedIntent.responses.filter(response=> response !== entry);
                    }
                    else{
                        console.log('Something went wrong');
                    }
                  
                  const updatedIntents = state.intents.map(intent =>
                    intent._id.$oid === intentId ? updatedIntent : intent
                  );

                  return {
                    intents: updatedIntents,
                  };
                  
                }
                return state;
            }
        default:
            return state;
    }
}

export const IntentsContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(intentsReducer, {
        intents:[]
    })

    return(
        <IntentsContext.Provider value = {{...state,dispatch}}>
            { children }
        </IntentsContext.Provider>
    )
}