/* eslint-disable react/jsx-pascal-case */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import SideBar from './components/SideBar';
import Routs from './pages/Routs';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div
      className="d-flex flex-column parent"
     
    >
      <NavBar />
      <main className="d-flex w-100">
        <SideBar />
        <Routes>
          <Route path="/*" element={<Routs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
