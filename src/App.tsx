import { ThemeProvider } from 'styled-components';
import { ColorsTheme } from './styles/global';
// import Hero from './components/hero/Hero';
// import Services from './components/services/Services';
import ContatoLp from './components/contatoLp/ContatoLp';

function App() {
  return (
    <ThemeProvider theme={ColorsTheme}>
    <div className="App">
      <ContatoLp/>
    </div>
    </ThemeProvider>
  );
}

export default App;
