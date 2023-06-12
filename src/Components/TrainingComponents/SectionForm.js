import { useState } from 'react'
import {
    Card, 
    CardHeader, 
    Heading, 
    CardBody,
    Input,
    Button,
    Text
} from '@chakra-ui/react'
import { useIntentsContext } from '../../Hooks/useIntentsContext';
import { useAuthContext } from '../../Hooks/useAuthContext';

const SectionForm = (props) => {
    const [prompt, setPrompt] = useState('');
    const [error, setError] = useState(''); 
    const {dispatch} = useIntentsContext();
    const {user} = useAuthContext();

    const addEntry = async(e) => {
        e.preventDefault();
        if(!user){
			setError('You must be logged in')
			return
		}
        const response = await fetch(`${process.env.REACT_APP_API_URL}add-${props.name}/${props._id}`, {
            method: 'PUT',
            body: JSON.stringify({prompt:prompt}),
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${user.token}`
            }
          })
             const json = await response.json()

            if (!response.ok) {
            setError(json.error)
            }
            if (response.ok) {
                setPrompt('')
                setError(null)
                dispatch({type:'ADD_ENTRY', payload:{ intentId:props._id, new_entry:prompt, section:props.name}})
            }
        }


  return (
    <div>
        <Card marginY="10px">
            <CardHeader>
            <Heading fontSize="xl"> Add {props.name} entry</Heading>
            </CardHeader>
            <CardBody>
                <Input value={prompt} onChange={e => {setPrompt(e.target.value)}}/>
                <Button onClick={addEntry} colorScheme='blue' marginTop="18px">Enter</Button>
                {error && <Text fontWeight="light" textColor='red.400' textAlign="left" padding="8px">{error}</Text>}
            </CardBody>
        </Card>
        
        
    </div>
  )
}

export default SectionForm