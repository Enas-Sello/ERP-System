/* eslint-disable react/jsx-pascal-case */
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import SideBar from './components/SideBar';
import Routs from './pages/Routs';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <Container fluid style={{ margin: '0', padding: '0', height: '100vh',display:'flex',flexDirection:'column', }}>
      <NavBar />
      <main
        className="d-flex w-100"
        style={ { height: '100vh' } }
      >
        <SideBar />
        <Routes>
          <Route path="/*" element={<Routs />} />
        </Routes>
      </main>
      <Footer />
    </Container>
  );
}

export default App;
