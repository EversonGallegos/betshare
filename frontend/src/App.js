import { Container } from './components/styles/app.styles';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { GlobalStyles } from './styles/global';
import Cart from './pages/Cart';
import Tickets from './pages/Tickets';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
          <AuthProvider>
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/tickets' element={<Tickets />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </AuthProvider>
      </Router>
    </>
  );
}

export default App;
