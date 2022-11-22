import Box from '@mui/material/Box';
import List from '@mui/material/List';
import MessageInput from './MessageInput';
import Message from './Message';
import { useDispatch, useSelector } from 'react-redux';
//import { addMessageWithTunk } from '../store/messages/action';
import { addMessageWithFB, getMessagesByChatidWithFB } from '../middlewares/middleware';
import { useEffect } from 'react';
//import { useParams } from 'react-router-dom';

const Chat = ({ chat }) => {
  const { id, name } = chat;
  //let {chatId} = useParams();
  //console.log(chat);
  const dispatch = useDispatch();
  const allMessageList = useSelector((state) => state.messages.messageList);

  const messageList = allMessageList[id] || [];

  const sendMessage = (message) => {
    //console.log(id);
    //dispatch(addMessageWithTunk(id, message));
    dispatch(addMessageWithFB(id,message));
    //console.log(chatId);
  }

  useEffect(()=>{
    dispatch(getMessagesByChatidWithFB(id));
    //console.dir(allMessageList);
    //console.dir(id);
  },[dispatch, id]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: 360,
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}>
      <h1>{name}</h1>
      <List className="message-list">
        {messageList?.map((singlemessage, key) => (<Message key={key} data={singlemessage} />))}
      </List>
      <MessageInput sendMessage={sendMessage} />
    </Box>

  )
}

export default Chat;

//