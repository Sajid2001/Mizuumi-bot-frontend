import {
    Card, 
    CardHeader, 
    Heading, 
    CardBody,
    CardFooter,
    Button,
    Text
} from '@chakra-ui/react'
import TrainingSection from './TrainingSection'
import axios from 'axios'
import { useState } from 'react'
import { useAuthContext } from '../../Hooks/useAuthContext'
import { useIntentsContext } from '../../Hooks/useIntentsContext'


const TrainingCard = (props) => {
  const {user} = useAuthContext();
  const [error, setError] = useState('');
  const {dispatch} = useIntentsContext();

  const deleteIntent = () => {
    if(!user){
      setError('You must be logged in');
      return
    }
    axios.delete(`${process.env.REACT_APP_API_URL}delete-intent/${props.intent._id.$oid}`,{
      headers:{
          'Authorization':`Bearer ${user.token}`
      }
  })
    .then(result => {
      console.log(result.data);
      dispatch({type:'DELETE_INTENT', payload:props.intent})
      
    })
    .catch(err => {
      console.log(err);
      setError(err);
    })
  }
  return (
    <div>
        <Card marginY="10px">
            <CardHeader>
            <Heading fontSize="4xl"> @{props.intent.tag}</Heading>
            </CardHeader>
            <CardBody>
            <TrainingSection 
              name = "Patterns"
             section = "pattern" 
             items = {props.intent.patterns} 
             _id = {props.intent._id.$oid}
             />
            <TrainingSection 
            name = "Responses" 
            section = "response" 
            items = {props.intent.responses}
            _id = {props.intent._id.$oid}
            />
            </CardBody>
            <CardFooter>
            <Button onClick={deleteIntent} colorScheme='red'>Delete</Button>
            {error && <Text textAlign='center' textColor='red'>{error}</Text>}
            </CardFooter>
        </Card>
    </div>
  )
}

export default TrainingCard