import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {  BrowserRouter,
   Routes,
  Route } from "react-router-dom";
import { orange } from '@mui/material/colors'; 
import Chats from './pages/Chats';
import Home from './pages/Home';
import Profile from './pages/Profile';

const theme = createTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    //mode: 'dark',
    background:{
      //default: '#001E3C'
    }
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <Routes>
        <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/chats" element={<Chats />}>
        <Route path=":chatId" element={<Chats />}/>
          </Route>
        <Route path="/profile" element={<Profile />}/>
        <Route path="*" element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }/>
      </Route>
        </Routes>
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

