import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { orange } from '@mui/material/colors';
import Chats from './pages/Chats';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { Provider } from 'react-redux';
import { persistor, store } from './store/index'
import { PersistGate } from 'redux-persist/integration/react';
import Gists from './pages/Gists';
import Login from './pages/Login';
import Registration from './pages/Registration';
import RequireAuth from './hoks/RequireAuth';
import { AuthProvider } from './hooks/AuthProvider';

const theme = createTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    //mode: 'dark',
    background: {
      //default: '#001E3C'
    }
  },
});

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
      <AuthProvider>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route element={<RequireAuth />}>
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/gists" element={<Gists />} />
                  <Route path="/chats" element={<Chats />}>
                    <Route path=":chatId" element={<Chats />} />
                  </Route>
                </Route>
                <Route path="*" element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                } />
              </Route>
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
      </AuthProvider>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

