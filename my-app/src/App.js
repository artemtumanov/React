import './App.css';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';
import { Outlet, Link as RouterLink } from "react-router-dom";
import { AUTHOR } from './constant/common'
import React from 'react';

const initialChats = {
  id1: {
    name: 'Chat 1',
    messages: [{ author: AUTHOR.bot, text: 'Welcome to Chat1' }]
  },
  id2: {
    name: 'Chat 2',
    messages: [{ author: AUTHOR.bot, text: 'Welcome to Chat2' }]
  }
}

function App() {
  const [chatList, setChatList] = React.useState(initialChats);
  const [open, setOpen] = React.useState(true);
  const addMessage = (chatId, message) => {

    setChatList({ ...chatList, [chatId]: { name: chatList[chatId].name, messages: [...chatList[chatId].messages, message] } });
  }

  const handleClick = () => {
    //console.log(props);
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
        <ListItem button component={renderLink}>
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
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {Object.keys(chatList).map((id, key) => (<ListItemLink to={'chats/' + id} primary={chatList[id].name} key={key} />))}

            </List>
          </Collapse>
        </List>
        <Outlet context={[chatList, addMessage]} />

      </Container>
    </div>
  );
}

export default App;


