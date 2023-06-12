import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { useState } from 'react'
  import { useSignin } from '../Hooks/useSignin'

  
  const SigninForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signin, error, isLoading} = useSignin()

    const handleSubmit = async(e) => {
      e.preventDefault();
      await signin(email,password)
    }

    return (
        <Flex
        align={'center'}
        justify={'center'}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  value={email}
                  onChange={e => {setEmail(e.target.value)}}
                  type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  value={password}
                  onChange={e => {setPassword(e.target.value)}}
                  type="password" />
              </FormControl>
                <Button
                  disabled={isLoading}
                  onClick={handleSubmit}
                  marginTop='10px'
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
                {isLoading && <Text textAlign='center'>Loading...</Text>}
                {error && <Text textAlign='center' textColor='red'>{error}</Text>}
                <Stack pt={6}>
                  <Text align={'center'}>
                    Don't have an account? <Link href='/signin' color={'blue.400'}>Sign Up</Link>
                  </Text>
                </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    )
  }
  
  export default SigninForm