import { useState } from "react";
import { ThemeProvider } from "styled-components";

import ButtonTheme from "./components/ButtonTheme";
import Footer from "./components/Footer";
import Routes from "./routes";

import { GlobalContextProvider } from "./context/GlobalContext";
import GlobalStyles from "./styles/Global";
import light from "./styles/theme/light";
import dark from "./styles/theme/dark";

function App() {
  const [theme, setTheme] = useState(dark);

  function handleChangeTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  return (
    <GlobalContextProvider>
      <ThemeProvider theme={theme}>
        <ButtonTheme
          handleChangeTheme={handleChangeTheme}
          theme={theme.title}
        />
        <Routes />
        <Footer />
        <GlobalStyles />
      </ThemeProvider>
    </GlobalContextProvider>
  );
}

export default App;
