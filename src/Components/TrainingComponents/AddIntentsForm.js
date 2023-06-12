import { useState } from 'react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    useColorModeValue,
    Link,
    Text
  } from '@chakra-ui/react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../Hooks/useAuthContext';

 
const AddIntentsForm = () => {
    const [newTag, setNewTag] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const {user} = useAuthContext();

    const addTag = async(e) => {
      e.preventDefault()
      if(!user){
        setError('You must be logged in')
        return
      }
      const response = await fetch(`${process.env.REACT_APP_API_URL}add-intent`, {
        method: 'POST',
        body: JSON.stringify({tag:newTag}),
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
            setNewTag('')
            setError(null)
            navigate('/training')
        }
    }

  return (
    <Flex
      justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading 
          fontSize={'4xl'} 
          fontFamily="'Cherry Bomb One', cursive"
          color='blue.400'
          fontWeight='light'
          >
            Create a New Tag
            </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={5}>
            <FormControl id="tag">
              <FormLabel>Tag</FormLabel>
              <Input type="text" value={newTag} onChange={e => {setNewTag(e.target.value)}}/>
            </FormControl>
            <Stack spacing={10}>
              <Button
                colorScheme='blue'
                color={'white'}
                onClick={addTag}
                >
                Add Tag
              </Button>
              {error && <Text textAlign='center' textColor='red'>{error}</Text>}
            </Stack>
          </Stack>
        </Box>
        <Link 
        textColor='blue.300'
         href='/training'
         > 
         ← Go back 
         </Link>
      </Stack>
    </Flex>
  )
}

export default AddIntentsForm