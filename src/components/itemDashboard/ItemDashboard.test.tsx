import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ColorsTheme } from "../../styles/global";
import store from "../../store";
import ItemDashboard from "./ItemDashboard";

describe("ItemDashboard component", () => {
  const onDeleteClick = jest.fn();

  const renderComponent = (props = {}) => {
    return render(
      <Provider store={store}>
        <ThemeProvider theme={ColorsTheme}>
          <BrowserRouter>
            <ItemDashboard
              currentPage="despesas"
              value={100}
              description="Test Description"
              id={1}
              onDeleteClick={onDeleteClick}
              {...props}
            />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );
  };

  expect(screen.getByTestId("logo-link-home")).toBeInTheDocument();
});
