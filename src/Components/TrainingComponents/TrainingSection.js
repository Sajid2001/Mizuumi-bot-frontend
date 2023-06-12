import React from 'react'
import SectionCard from './SectionCard'
import { Heading, SimpleGrid } from '@chakra-ui/react'
import SectionForm from './SectionForm'

const TrainingSection = (props) => {
  return (
    <div>
        <Heading margin="10px">{props.name}</Heading>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
          {props.items.map(entry => (
              <SectionCard section ={props.section} _id = {props._id} entry= {entry}/>
          ))}
          <SectionForm _id = {props._id} name = {props.section}/>
        </SimpleGrid>
    </div>
  )
}

export default TrainingSection