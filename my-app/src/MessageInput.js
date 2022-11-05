import { useRef, useState} from 'react';
import { Button, Box, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import {AUTHOR} from './constant/common'


const MessageInput = (props) => {
    const inputEl = useRef();
    const [message, setMessage] = useState([]);
    const submitForm = (e) => {
        e.preventDefault();
        inputEl.current?.focus();
        //console.log(e);
        if(message){
          props.addMessage(AUTHOR.me ? AUTHOR.me : AUTHOR.default, message);
          setMessage("");
        }
        else
          console.log("Empty message");
      }

      

    const handleMessageInput =(e) =>{
        setMessage(e.target.value);
      }


    return (
        <Box
            component="form"
            sx={{
                width: 300,
                display: 'flex',
                flexDirection: 'column',
                marginTop: 2
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-textarea"
                label="Сообщение"
                placeholder="Введите сообщение"
                multiline
                rows={2}
                onChange={handleMessageInput}
                value={message}
                autoFocus
                inputRef={inputEl}
            />
            <Button variant="contained" onClick={submitForm} endIcon={<SendIcon />}>
                Send
            </Button>
        </Box>

    )


}

export default MessageInput;