import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      {/* <Route path='/' element={<Product/>}> </Route>       */}
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
