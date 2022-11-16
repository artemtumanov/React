import { AUTHOR } from '../constant/common';
import { addMessage, ADD_MESSAGE } from "../store/messages/action"

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