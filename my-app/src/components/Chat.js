import Box from '@mui/material/Box';
import List from '@mui/material/List';
import MessageInput from './MessageInput';
import Message from './Message';
import { useDispatch, useSelector } from 'react-redux';
import { addMessageWithTunk } from '../store/messages/action';

const Chat = ({ chat }) => {
  const { id, name } = chat;
  //console.log(chat);
  const dispatch = useDispatch()
  const allMessageList = useSelector((state) => state.messages.messageList)

  const messageList = allMessageList[id] || [];

  const sendMessage = (message) => {
    //console.log(id);
    dispatch(addMessageWithTunk(id, message));
  }

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
        {messageList.map((singlemessage) => (<Message key={singlemessage.id} data={singlemessage} />))}
      </List>
      <MessageInput sendMessage={sendMessage} />
    </Box>

  )
}

export default Chat;

//