import { ThemeProvider } from 'styled-components';
import { ColorsTheme } from './styles/global';

function App() {
  return (
    <ThemeProvider theme={ColorsTheme}>
    <div className="App">
    </div>
    </ThemeProvider>
  );
}

export default App;
