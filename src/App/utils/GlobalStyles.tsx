import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  '@global': {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
    body: {
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: 16,
    },
    h1: {
      margin: 0,
      fontWeight: 'normal',
    },
    h2: {
      margin: 0,
      fontWeight: 'normal',
    },
    h3: {
      margin: 0,
      fontWeight: 'normal',
    },
    h4: {
      margin: 0,
      fontWeight: 'normal',
    },
    h5: {
      margin: 0,
      fontWeight: 'normal',
    },
    h6: {
      margin: 0,
      fontWeight: 'normal',
    },
    ul: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    ol: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    a: {
      textDecoration: 'none',
    },
    table: {
      borderCollapse: 'collapse',
      width: '100%',
    },
    td: {
      border: '1px solid #ddd',
      padding: 8,
    },
    th: {
      border: '1px solid #ddd',
      padding: 8,
      backgroundColor: '#ddd',
    },
  },
});

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;
export {}; // TS: Mark as a module