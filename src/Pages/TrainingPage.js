import React from 'react'
import { Container} from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

const TrainingPage = () => {
  return (
    <Container maxW="6xl">
      <Outlet/>
    </Container>
  )
}

export default TrainingPage