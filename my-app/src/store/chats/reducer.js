import { ADD_CHAT, DEL_CHAT } from "./action";

const initialState = {
    chatList:[],
    lastIndex: 0
};

const chatsReducer = (state = initialState,action) =>{
    switch (action.type) {
        case ADD_CHAT:
            return {
                 ...state,
                  chatList: [
                      ...state.chatList,
                    {
                        id: `id${ state.lastIndex }`,
                        name: action.payload
                    }
                ],
                lastIndex: state.lastIndex+1
            };
        case DEL_CHAT:
            return {...state,
                chatList: [...state.chatList.filter(chat => chat.id !== action.payload)]
            }
        default:
            return state;
    }
}

export default chatsReducer;