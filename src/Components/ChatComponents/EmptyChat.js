import { Image, Flex, Text,Link } from '@chakra-ui/react'
import React from 'react'
import mizuumi from '../../Assets/Images/Mizuumi.jpg'

const EmptyChat = () => {
  return (
    <Flex justify='center' direction="column">
        <Image 
        boxSize='350px'
        src={mizuumi}
        borderRadius='full'
        margin='auto'
        marginBottom='15px'
        />
        <Text textAlign='center' fontSize='xl' fontWeight='light'>
            It looks like you have not talked to<Text as='span' fontSize='2xl' fontWeight='light' textColor='blue.400' fontFamily="'Cherry Bomb One', cursive"> Mizuumi </Text>yet. Don't be shy. She's very friendly.
        </Text>
        <Text textAlign='center' fontSize='md' mt='8px' fontWeight='light'>
          Support the artist <Link target='_blank' href='https://www.pixiv.net/en/users/31893202' textColor='blue.300'>here</Link>.
        </Text>

    </Flex>

  )
}

export default EmptyChat