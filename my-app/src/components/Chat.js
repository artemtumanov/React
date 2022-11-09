import Box from '@mui/material/Box';
import List from '@mui/material/List';
import MessageInput from './MessageInput';
import Message from './Message';
import { useEffect, } from 'react';
import { AUTHOR } from '../constant/common';
import { useOutletContext } from "react-router-dom";

const Chat = (props) => {
  const { chatId } = props;
  const [chatList, addMessage] = useOutletContext();
  const bot = () => {
    let text = 'Спасибо за отзыв';
    addMessage(chatId, { author: AUTHOR.bot, text: text });
  }

  useEffect(() => {
    if (chatList[chatId].messages.length && chatList[chatId].messages[chatList[chatId].messages.length - 1].author !== AUTHOR.bot) {
      let timerId = setTimeout(bot, 1500);
      return () => {
        clearTimeout(timerId);
      }
    }
  });

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
      <h1>{chatList[chatId].name}</h1>
      <List className="message-list">
        {chatList[chatId].messages.map((singlemessage, index) => (<Message key={index} data={singlemessage} />))}
      </List>
      <MessageInput addMessage={addMessage} chatId={chatId} />
    </Box>

  )
}

export default Chat;