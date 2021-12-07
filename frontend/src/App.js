import { GlobalStyles } from './styles/global';
import { AuthProvider } from './context/AuthContext';
import Routing from './routes/Routing';

function App() {
  return (
      <AuthProvider>
        <GlobalStyles />
        <Routing />
      </AuthProvider>
  );
}

export default App;
