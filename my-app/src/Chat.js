import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Chat = ({data}) => {

    return (
        <ListItem disablePadding key={data.chatId}>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary={data.chatName} />
            </ListItemButton>
          </ListItem>
    
    )

}

export default Chat;