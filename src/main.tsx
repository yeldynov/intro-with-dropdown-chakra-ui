import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import {} from '@chakra-ui/react';

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    'c-almost-white': 'hsl(0, 0%, 98%)',
    'c-medium-gray': 'hsl(0, 0%, 41%)',
    'c-almost-black': ' hsl(0, 0%, 8%)',
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
