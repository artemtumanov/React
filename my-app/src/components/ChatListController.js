import {
  TextField,
  List,
  ListItemText,
  ListItemButton,
  DialogTitle,
  Dialog,
  Button
} from '@mui/material';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addChatWithFB, delChatWithFB, initTrackerWithFB } from '../middlewares/middleware';
//  import { addChat, delChat } from '../store/chats/action';
import ChatListItem from './ChatListItem';

const ChatListController = (props) => {
  const chats = useSelector((state) => state.chats)
  const [visible, setVisible] = React.useState(false);
  const [chatName, setChatName] = React.useState('');
  const dispatch = useDispatch();

  const handleAddChatDialog = () => {
    setVisible(true);
  }
  const handleDialogClose = () => {
    setVisible(false);
    setChatName('');
  }
  const handleChatName = (e) => {
    setChatName(e.target.value);
  }
  const handleAddNewChat = () => {
    //dispatch(addChat(chatName));
    dispatch(addChatWithFB(chatName));
    handleDialogClose();
  }
  const handleChatDelete = (id) => {
    //dispatch(delChat(e.target.closest('button').value));
    dispatch(delChatWithFB(id));
    //e.preventDefault();        
  }

  useEffect(() => {
    dispatch(initTrackerWithFB());
  }, [dispatch])


  return (
    <List component="div" disablePadding>
      {chats.chatList.map((chat) => (<ChatListItem chat={chat} key={chat.id} delButton={() => handleChatDelete(chat.id)} />))}
      <ListItemButton onClick={handleAddChatDialog}><ListItemText primary="Add Chat" /></ListItemButton>
      <Dialog open={visible} onClose={handleDialogClose}>
        <DialogTitle>Please enter a name for new chat</DialogTitle>
        <TextField
          placeholder="Chat name"
          value={chatName}
          onChange={handleChatName} />
        <Button variant="contained" onClick={handleAddNewChat}>Сохранить</Button>
      </Dialog>
    </List>
  );
}
export default ChatListController;