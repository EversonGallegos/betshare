import { Container } from './components/styles/app.styles';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { GlobalStyles } from './styles/global';
import Cart from './pages/Cart';
import Tickets from './pages/Tickets';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/tickets' element={<Tickets />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
