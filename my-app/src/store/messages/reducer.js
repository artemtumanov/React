import { ADD_MESSAGE } from "./action"

const initialState = {
    messageList: {}
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let { chatId, message } = action.payload;
            let oldMessages = state.messageList[chatId] || [];

            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [chatId]: [
                        ...oldMessages,
                        {
                            id: `${chatId}${oldMessages.length}`,
                            ...message
                        }
                    ]
                }
            };
        }
        default:
            return state;
    }
}

export default messagesReducer;