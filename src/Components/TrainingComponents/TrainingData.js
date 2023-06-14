import { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Stack, Heading, Text, Input, FormLabel } from '@chakra-ui/react'
import TrainingCard from './TrainingCard';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useIntentsContext } from '../../Hooks/useIntentsContext';
import { useAuthContext } from '../../Hooks/useAuthContext'

const TrainingData = () => {
    const {intents, dispatch} = useIntentsContext();
    const [searchQuery, setSearchQuery] = useState('');
    const [isTraining, setIsTraining] = useState(false);
    const [error, setError] = useState('');
    const { user } = useAuthContext();
    const navigate = useNavigate();

    const navigateToForm = () => {
        navigate('/training/add-intent')
    }

    const filteredIntents = intents.filter(intent =>
        intent.tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const train = async(e) => {
        e.preventDefault();
        if(!user){
            setError('You must be logged in')
            return
        }
        setIsTraining(true);
        const response = await fetch(`${process.env.REACT_APP_API_URL}train`, {
			method: 'POST',
			body: JSON.stringify({}),
			headers: {
                'Content-Type': 'application/json',
			    'Authorization': `Bearer ${user.token}`
			}
		  })
		  const json = await response.json()

		if (!response.ok) {
			setError(json.error)
			setIsTraining(false)
		}
		if (response.ok) {
			setError(null)
			setIsTraining(false);
		}
    }


    const getIntents = async() => {
        axios.get(`${process.env.REACT_APP_API_URL}intents`,{
            headers:{
                'Authorization':`Bearer ${user.token}`
            }
        })
        .then(result => {
            dispatch({type:'SET_INTENTS', payload:result.data})
            console.log(result.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        if(user){
            getIntents();
        }
    },[])
    
  return (
    <>
        <Heading 
        textAlign="center" 
        marginY="20px"
        fontFamily="'Cherry Bomb One', cursive"
        color='blue.400'
        fontWeight='light'
        fontSize='5xl'
        >
            Dojo

        </Heading>
        <Stack direction='column' spacing={3} justify='center' align='center'>
            <Stack direction='row' spacing={4} align='center' justify='center' margin='5'>
                <Button
                onClick={navigateToForm} 
                colorScheme='blue'
                >
                    Create Intent
                </Button>
                <Button 
                onClick={train} 
                colorScheme='teal'
                >
                    Train Mizuumi
                </Button>
            </Stack>
            <FormLabel>Search Intent by Tag</FormLabel>
            <Input
                maxW='md'
                marginBottom='10px'
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search tags..."
            />
        </Stack>

        {isTraining && <Text textAlign='center'>Mizuumi is training to get stronger...</Text>}
        {error && <Text textAlign='center' textColor='red'>{error}</Text>}
        {!isTraining && filteredIntents.map(intent => (
            <TrainingCard intent = {intent}/>
        ))}  
    </>
  )
}

export default TrainingData