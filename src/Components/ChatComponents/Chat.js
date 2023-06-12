import { Container } from '@chakra-ui/react';
import Messages from './Messages';
import ChatForm from './ChatForm';

const Chat = () => {
   

  return (
    <Container marginY="8px">
        <Messages/>
        <ChatForm/>
    </Container>
  )
}

export default Chat