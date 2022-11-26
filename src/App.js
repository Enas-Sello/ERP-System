/* eslint-disable react/jsx-pascal-case */
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import SideBar from './components/SideBar';
import Routs from './pages/Routs';
import NavBar from './components/NavBar';

function App() {
  return (
    <Container fluid style={{margin:'0', padding:'0'}}>
      <NavBar />
      <main className="d-flex">
        <SideBar />
        <Routes>
          <Route path="/*" element={<Routs />} />
        </Routes>
      </main>
    </Container>
  );
}

export default App;
