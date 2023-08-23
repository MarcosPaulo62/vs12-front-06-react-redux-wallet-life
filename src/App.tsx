import { ThemeProvider } from "styled-components";
import { ColorsTheme } from "./styles/global";
import { Router } from "./Routes";

function App() {
  return (
    <ThemeProvider theme={ColorsTheme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
