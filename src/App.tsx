import { useState } from "react";
import { ThemeProvider } from "styled-components";

import Routes from "./routes";
import Footer from "./components/Footer";
import ButtonTheme from "./components/ButtonTheme";

import light from "./styles/theme/light";
import dark from "./styles/theme/dark";
import GlobalStyles from "./styles/Global";

function App() {
  const [theme, setTheme] = useState(dark);

  function handleChangeTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <ButtonTheme handleChangeTheme={handleChangeTheme} theme={theme.title} />
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
