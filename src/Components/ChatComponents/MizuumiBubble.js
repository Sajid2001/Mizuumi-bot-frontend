import React from 'react'
import { Flex, Avatar, Text } from '@chakra-ui/react'
import mizuumi from '../../Assets/Images/Mizuumi.jpg'

const MizuumiBubble = (props) => {
  return (
    <div>
        <Flex key={props.message._id} w="100%">
          	<Avatar
            	name="Mizuumi"
            	src={mizuumi}
            	bg="blue.300"
                marginX="10px"
          	></Avatar>
          	<Flex
                borderRadius="15px"
            	bg="gray.100"
            	color="black"
            	minW="100px"
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

export default MizuumiBubble