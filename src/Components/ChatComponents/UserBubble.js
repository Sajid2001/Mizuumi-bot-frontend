import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

const UserBubble = (props) => {
  return (
    <div>
        <Flex key={props.message._id} w="100%" justify="flex-end">
          	<Flex
				borderRadius="15px"
            	bg="black"
            	color="white"
            	minW="50px"
            	maxW="350px"
            	my="1"
            	p="3"
          	>
            	<Text>{props.message.text}</Text>
          	</Flex>
        	</Flex>
    </div>
  )
}

export default UserBubble