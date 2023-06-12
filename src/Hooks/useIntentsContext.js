import { IntentsContext } from "../Contexts/IntentsContext";
import { useContext } from 'react'

export const useIntentsContext = () => {
    const context = useContext(IntentsContext)

    if(!context){
        throw Error('useIntentsContext must be used inside an IntentsContextProvider')
    }

    return context
}