import Paper from '@mui/material/Paper';

const Message = ({ data }) => {
    
    return (
        <Paper elevation={3} className={data.author === "Bot" ? 'message-wrapper bot-message' : "message-wrapper"}>
            <div className="message-author">{data.author}</div>
            <div className="message-text">{data.text}</div>
        </Paper>
    )
}

export default Message;
