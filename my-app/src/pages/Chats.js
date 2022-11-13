import Chat from '../components/Chat';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

const Chats = () => {
    let { chatId } = useParams();
    const chat = useSelector((state) => state.chats.chatList.find(chat => chat.id === chatId))

    if (!chat) {
        return (<div>404</div>);
    }
    return <div>
        <Chat chat={chat} />
    </div>
}
export default Chats;

