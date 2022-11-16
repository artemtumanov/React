import './App.css';
import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Collapse,
} from '@mui/material';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Outlet, Link as RouterLink } from "react-router-dom";
import React from 'react';
import ChatListController from './components/ChatListController';



function App() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  function ListItemLink(props) {
    const { icon, primary, to } = props;
    const renderLink = React.useMemo(
      () =>
        React.forwardRef(function Link(itemProps, ref) {
          return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
        }),
      [to],
    );
    return (
      <li>
        <ListItem button
          component={renderLink}
        >
          {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
          <ListItemText primary={primary} />
        </ListItem>
      </li>
    );
  }

  return (
    <div className="App">
      <Container maxWidth="sm" sx={{ display: 'flex' }}>
        <List>
          <ListItemLink to="/" primary="Home" />
          <ListItemLink to="profile" primary="Profile" />
          <ListItemButton onClick={handleClick}>
            <ListItemText primary="Chats" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" /*unmountOnExit*/ >
            <ChatListController />
          </Collapse>
        </List>
        <Outlet />

      </Container>
    </div>
  );
}

export default App;


//{Object.keys(chatList).map((id, key) => (<ListItemLink to={'chats/' + id} primary={chatList[id].name} key={key} />))}
//context={[chatList, addMessage]}