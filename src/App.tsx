import { ThemeProvider } from "styled-components";
import { ColorsTheme } from "./styles/global";
import { Differentials } from "./components/differentials/Differentials";

function App() {
  return (
    <ThemeProvider theme={ColorsTheme}>
      <div className="App">
        <Differentials />
      </div>
    </ThemeProvider>
  );
}

export default App;
