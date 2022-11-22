export const ADD_CHAT = 'CHAT::ADD_CHAT';
export const DEL_CHAT = 'CHAT::DEL_CHAT';
export const UPDATE_CHATS = 'CHAT::UPDATE_CHATS';

export const addChat = (name) =>({
    type: ADD_CHAT,
    payload: name
});

export const delChat = (id) =>({
    type: DEL_CHAT,
    payload: id
});

export const chatListUpdate = (chats) => ({
    type: UPDATE_CHATS,
    payload: chats
})
