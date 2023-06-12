import { useEffect, useState} from 'react'
import UserBubble from './UserBubble';
import MizuumiBubble from './MizuumiBubble';
import axios from 'axios'
import { useMessagesContext } from '../../Hooks/useMessagesContext'
import { useAuthContext } from '../../Hooks/useAuthContext';
import EmptyChat from './EmptyChat';
import { Text } from '@chakra-ui/react';

const Messages = () => {
    const { messages, dispatch } = useMessagesContext([])
    const { user } = useAuthContext();
    const [isLoading, setIsLoading] = useState(false)

    const getMessages = () => {
        setIsLoading(true);
        axios.get(`${process.env.REACT_APP_API_URL}messages`, {
            headers:{
                'Authorization':`Bearer ${user.token}`
            }
        })
        .then(result => {
            dispatch({type:'SET_MESSAGES', payload:result.data})
            setIsLoading(false);
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(() =>{
        if(user){
            getMessages();
        }
        
    },[dispatch, user])

  return (
    <div>
        {messages.slice(0).reverse().map(message => 
            {   if (message.sender !== "Mizuumi"){
                    return(<UserBubble message = {message}/>)
                } else {
                    return(<MizuumiBubble message = {message}/>)
                }
            }
        )
        }
        {isLoading && <Text textAlign='center'>Loading...</Text>}
        {!isLoading && messages.length === 0 && <EmptyChat/>}
    </div>
  )
}

export default Messages