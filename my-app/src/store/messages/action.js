import { AUTHOR } from '../../constant/common';

export const ADD_MESSAGE = 'MESSAGE::ADD_MESSAGE';

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: { chatId, message }
});

export const addMessageWithTunk = (chatId, message) => (dispatch, getState) => {
    dispatch(addMessage(chatId, message));
    if (
        message.author !== AUTHOR.bot
    ) {
        const newMessage = {
            author: AUTHOR.bot,
            text: 'Спасибо за отзыв'
        };
        setTimeout(
            () => dispatch(addMessage(chatId, newMessage)),
            1500
        );
    }
};