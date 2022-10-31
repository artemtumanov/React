const Message =({data})=>{
    return (
    <div className={data.author === "Bot" ? 'message-wrapper bot-message' : "message-wrapper"}>
        <div className="message-author">{data.author}</div>
        <div className="message-text">{data.text}</div>
    </div>
    )
}

export default Message