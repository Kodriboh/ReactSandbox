import React from 'react';
import { ThemeProvider } from 'react-jss';
import GlobalStyles from './utils/GlobalStyles';

const App = () => (
    <ThemeProvider theme={{}}>
        <GlobalStyles />
        <div role="application"></div>
    </ThemeProvider>

);

export default App;