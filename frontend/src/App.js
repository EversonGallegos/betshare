import { Container } from './components/styles/app.styles';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Game from './pages/Game';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/game' element={<Game />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
