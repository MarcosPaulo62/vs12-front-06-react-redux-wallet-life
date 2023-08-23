import { ThemeProvider } from 'styled-components';
import { ColorsTheme } from './styles/global';
import Hero from './components/hero/Hero';
import Services from './components/services/Services';

function App() {
  return (
    <ThemeProvider theme={ColorsTheme}>
    <div className="App">
      <Hero></Hero>
      <Services></Services>
    </div>
    </ThemeProvider>
  );
}

export default App;
