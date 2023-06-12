import {
    Card, 
    Text,
    CardFooter,
    Button,
    CardHeader
} from '@chakra-ui/react'
import axios from 'axios'
import { useIntentsContext } from '../../Hooks/useIntentsContext'
import { useAuthContext } from '../../Hooks/useAuthContext'
import { useState } from 'react'

const SectionCard = (props) => {
  const {dispatch} = useIntentsContext();
  const {user} = useAuthContext()
  const [error, setError] = useState('');

  const deleteEntry = () => {
    if(!user){
      setError('You must be logged in')
      return
    }
    axios.put(`${process.env.REACT_APP_API_URL}delete-${props.section}/${props._id}/${encodeURIComponent(props.entry)}`,{},{
      headers:{
          'Authorization':`Bearer ${user.token}`
      }
  })
    .then(result => {
      dispatch({type:'DELETE_ENTRY', payload:{intentId:props._id, entry:props.entry, section:props.section}})
      console.log(result.data);
    })
    .catch(err => {
      console.log(err);
      setError(err);
    })
  }
  return (
    <>
      <Card marginY="10px">
          <CardHeader>
          <Text>{props.entry}</Text>
          </CardHeader>
          <CardFooter>
          <Button colorScheme='red' 
          onClick={deleteEntry}
          >
            Delete
          </Button>
          </CardFooter>
      </Card>
      {error && <Text fontWeight="light" textColor='red.400' textAlign="left" padding="10px">{error}</Text>}
    </>
  )
}

export default SectionCard