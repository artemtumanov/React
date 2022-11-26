import { AUTHOR } from '../constant/common';
import firebase from '../services/firebaseConfig';
import { getDatabase, ref, push, onValue, set, remove} from 'firebase/database'
import { addMessage, ADD_MESSAGE, updateMessages } from "../store/messages/action"
import { chatListUpdate } from '../store/chats/action';

const middleware = (store) => (next) => (action) => {
    console.log('in middle');
    if(
        action.type === ADD_MESSAGE &&
        action.payload.message.author !== AUTHOR.bot
    ) {
        const newMessage = {
            author: AUTHOR.bot,
            text: 'Спасибо за отзыв'
        };
        setTimeout(
            () => store.dispatch(addMessage(action.payload.chatId, newMessage)),
            1500 
        );
    }
    return next(action);
};

export default middleware;

export const initTrackerWithFB= ()=> async (dispatch) => {
    const db = getDatabase(firebase);
    const chatRef = ref(db, '/chats');
    onValue(chatRef, (snapshot)=> {
        const data = snapshot.val();        
        const chatIds = data ? Object.keys(data) : [];
        const chatArr = chatIds.map(item => ({
            id: item,
            name: data[item].name
        }));
        dispatch(chatListUpdate(chatArr));
    });
};
export const addChatWithFB = (name) => async () => {
    const db = getDatabase(firebase);
    const chatRef = ref(db, '/chats');
    const newChatRef = push(chatRef);
    set(newChatRef, {name: name}).then((res) => {
        console.log('chat added', res);
    });
};
export const delChatWithFB = (id) => async () => {
    const db = getDatabase(firebase);
    const chatRef = ref(db, `/chats/${id}`);
    const messageRef = ref(db, `/messages/${id}`);
    remove(chatRef).then((res)=>{
        console.log('remove chat', res);
    });
    remove(messageRef).then((res)=>{
        console.log('message deleted', res );
    });
};

export const addMessageWithFB = (chatId, message) => async () => {
    const db =getDatabase(firebase);
    const messageRef = ref(db, `/messages/${chatId}`);
    const newMessageRef = push(messageRef);
    set(newMessageRef, message).then((res) => {
        console.log('message added', res);
    });
};

export const getMessagesByChatidWithFB = (chatId) => async (dispatch) => {
    const db =getDatabase(firebase);
    const msgRef = ref(db, `/messages/${chatId}`);

    onValue(msgRef, (snapshot)=> {
        const data =snapshot.val();
        const msg = data && Object.values(data);
        if (msg?.length > 0) {
            dispatch(updateMessages(chatId, msg));
        }
    });
}