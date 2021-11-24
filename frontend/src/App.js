import { Container } from './components/styles/app.styles';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
