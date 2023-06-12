import {useState} from 'react'
import { Text, Input, Flex, Button } from '@chakra-ui/react';
import { useMessagesContext } from '../../Hooks/useMessagesContext';
import { useAuthContext } from '../../Hooks/useAuthContext';


const ChatForm = () => {
    
    const [message, setMessage] = useState('');
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
    const {dispatch} = useMessagesContext();
	const {user} = useAuthContext();

	const handleChatSubmit = async(e) => {
		e.preventDefault();

		if(!user){
			setError('You must be logged in')
			return
		}
		const chatMessage = {
            text:message,
            sender: user.email
        }
		setIsLoading(true);
		const response = await fetch(`${process.env.REACT_APP_API_URL}respond`, {
			method: 'POST',
			body: JSON.stringify(chatMessage),
			headers: {
			  'Content-Type': 'application/json',
			  'Authorization': `Bearer ${user.token}`
			}
		  })
		  const json = await response.json()

		if (!response.ok) {
			setError(json.error)
			setIsLoading(false)
		}
		if (response.ok) {
			setMessage('')
			setError(null)
			setIsLoading(false);
			dispatch({type:'SEND_MESSAGE', payload:chatMessage})
			dispatch({type:'SEND_MESSAGE', payload:json})
		}
	}

  return (
	<>
	{isLoading && <Text fontWeight="bold" textAlign="left" padding="10px">Mizuumi is typing...</Text>}
	{error && <Text fontWeight="light" textColor='red.400' textAlign="center" padding="5px">{error}</Text>}
    <Flex 
    w="100%" 
    my="3">
  	<Input
    	placeholder="Type Something..."
    	_focus={{
      	border: "1px solid black",
    	}}
    	onKeyDown={(e) => {
      	if (e.key === "Enter") {
        	console.log('sent');
      	}
    	}}
    	value={message}
    	onChange={(e) => setMessage(e.target.value)}
  	/>
  	<Button
    	bg="black"
    	color="white"
        mx="8px"
    	borderRadius="15px"
    	_hover={{
      	bg: "white",
      	color: "black",
      	border: "1px solid black",
    	}}
    	disabled={message.trim().length <= 0}
        onClick={handleChatSubmit}
  	>
    	Send
  	</Button>
	</Flex>
	</>
  )
}

export default ChatForm