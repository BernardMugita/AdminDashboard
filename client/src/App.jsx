import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import { useState } from 'react';
import styled from 'styled-components';
import New from './Pages/new/New';
import Single from './Pages/single/Single';
import Login from './Pages/login/Login';
import List from './Pages/list/List'
import Home from './Pages/home/Home'


const Portal = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

function App() {

  const [active, setActive] = useState("Dashboard");
  return (
    <Portal>
      <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/users' element={<List/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/new' element={<New/>}/>
            <Route exact path='/users/:userId' element={<Single/>}/>
        </Routes>
      </BrowserRouter>
    </Portal>
  );
}

export default App;
