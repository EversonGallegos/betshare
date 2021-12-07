import { GlobalStyles } from './styles/global';
import { AuthProvider } from './context/AuthContext';

import Routering from './routes/Routering';

function App() {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <Routering />
      </AuthProvider>
    </>
  );
}

export default App;
