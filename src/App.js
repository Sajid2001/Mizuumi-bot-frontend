import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './Components/Navbar';
import ChatPage from './Pages/ChatPage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TrainingPage from './Pages/TrainingPage';
import AddIntentPage from './Pages/AddIntentPage';
import TrainingDataPage from './Pages/TrainingDataPage';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';
import { useAuthContext } from './Hooks/useAuthContext';

function App() {
  const { user } = useAuthContext()
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar/>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={user ? <ChatPage/> : <Navigate to='signin'/>}/>
          <Route path='/signin' element={!user ? <SignInPage/>: <Navigate to='/'/>}/>
          <Route path='/signup' element={!user ? <SignUpPage/>: <Navigate to='/'/>}/>
          <Route path='training' element={user && user.role === 'ADMIN' ? <TrainingPage/>: <Navigate to='/'/>}>
            <Route path='/training' element={<Navigate replace to='data'/>}/>
            <Route path='data' element={<TrainingDataPage/>}/>
            <Route path='add-intent' element={<AddIntentPage/>}/>
          </Route>
        </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
