import {
  Box,
  Button,
  Spacer,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  Heading,
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { Link } from '@chakra-ui/react'
import { useLogout } from '../Hooks/useLogout'
import { useAuthContext } from '../Hooks/useAuthContext'

const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const hoverAttributes = {
    textDecoration:'none',
     color:'gray.400'
  }

  const logoHoverAttributes = {
    textDecoration:'none',
     color:'blue.200'
  }

  const handleClick = () => {
    logout();
  }

  return (
    <Box as="section" pb={{ base: '6', md: '12' }}>
    <Box as="nav" bg="bg.surface" boxShadow="sm">
      <Container maxW='7xl' py={{ base: '3', lg: '4' }}>
        <HStack spacing="10" justify="space-between">
          <Heading 
          fontWeight='light' 
          fontFamily="'Cherry Bomb One', cursive"
          color='blue.400'
          >
            <Link href='/' _hover={logoHoverAttributes}>
              Ohaayoo Mizuumi!!
            </Link>
          </Heading>
          {isDesktop ? (
            <Flex justify="space-between" flex="1">
              <Spacer/>
              <HStack spacing="3">
                {!user && (
                  <>
                  <Button variant="tertiary"><Link _hover={hoverAttributes} href='/signin'>Sign in</Link></Button>
                  <Button variant="primary"><Link _hover={hoverAttributes} href='/signup'>Sign Up</Link></Button>
                  </>
                )}
                {user && (
                  <>
                    <Box bg="gray.200" p="10px" borderRadius="10px">{user.email}</Box>
                    {user.role === 'ADMIN' && (
                      <Button variant="primary"><Link _hover={hoverAttributes} href='/training'>Training Grounds</Link></Button>
                    )}
                    <Button variant="primary" onClick={handleClick} _hover={hoverAttributes}>Log Out</Button> 
                  </>
                )}
                 
              </HStack>
            </Flex>
          ) : (
            <IconButton
              variant="tertiary"
              icon={<FiMenu fontSize="1.25rem" />}
              aria-label="Open Menu"
            />
          )}
        </HStack>
      </Container>
    </Box>
  </Box>
  )
}

export default Navbar