import { ThemeProvider } from "styled-components";
import { ColorsTheme } from "./styles/global";
import { Router } from "./Routes";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={ColorsTheme}>
        <Router />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
