import React from "react";
import Router from "router";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/GlobalStyles";
import { main } from "styles/theme";

function App() {
	return (
		<ThemeProvider theme={main}>
			<GlobalStyles />
			<Router />
		</ThemeProvider>
	);
}

export default App;
