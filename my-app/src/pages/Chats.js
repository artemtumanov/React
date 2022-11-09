import Chat from '../components/Chat';
import { useParams, useOutletContext } from "react-router-dom";

const Chats = () => {
    const [chatList] = useOutletContext();
    let { chatId } = useParams();

    if (!chatList[chatId]) {
        return (<div>404</div>);
    }
    return <div>
        <Chat chatId={chatId} />
    </div>
}
export default Chats;

