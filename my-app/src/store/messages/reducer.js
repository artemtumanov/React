import { ADD_MESSAGE, UPDATE_MESSAGES } from "./action"

const initialState = {
    messageList: {}
}
/**messageList
  {
      chatId: [{id, text, author}]
  }
  ----
 type messageItem = {
     id: string,
     text: string,
     author: string
 }
 ----
 type messageList = Record <[string], messageItem[]>
 [string]: messageItem[]
 */

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            console.log(action);
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
        case UPDATE_MESSAGES:
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.payload.chatId]: action.payload.messages
                }
            };
        default:
            return state;
    }
}

export default messagesReducer;