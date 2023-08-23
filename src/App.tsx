import { ThemeProvider } from 'styled-components';
import { ColorsTheme } from './styles/global';
import Header from './components/header/Header';

function App() {
  return (
    <ThemeProvider theme={ColorsTheme}>
    <div className="App">
    </div>
    </ThemeProvider>
  );
}

export default App;
