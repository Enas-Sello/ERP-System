/* eslint-disable react/jsx-pascal-case */
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import SideBar from './components/SideBar';
import Main from './pages/Main';
import NavBar from './components/NavBar';

function App() {
  return (
    <Container fluid className="">
      <NavBar />
      <main className='d-flex'>
        <SideBar />
        <Routes>
          <Route path="/*" element={<Main />} />
        </Routes>
      </main>
    </Container>
  );
}

export default App;
