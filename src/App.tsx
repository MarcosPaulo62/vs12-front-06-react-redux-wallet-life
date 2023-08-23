import { ThemeProvider } from 'styled-components';
import { ColorsTheme } from './styles/global';
import Login from './pages/login/Login';

function App() {
  return (
    <ThemeProvider theme={ColorsTheme}>
    <div className="App">
      <Login />
    </div>
    </ThemeProvider>
  );
}

export default App;
