import { configureStore } from "@reduxjs/toolkit"

// TYPE을 미리 변수로 정의하면 오타가 발생해도 실행시에 오타를 잡아낼수있다./
const ADD = "ADD"
const DELETE = "DELETE"

// actionCreator
const addToDo = (text) => {
    return {
        type: ADD,
        text,
    }
}

const deleteToDo = (id) => {
    return {
        type: DELETE,
        id,
    }
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [{ text: action.text, id: Date.now() }, ...state]
        case DELETE:
            return state.filter((toDo) => {
                return toDo.id !== action.id
            })
        default:
            return state
    }
}

const store = configureStore({ reducer })
export const actionCreators = {
    addToDo,
    deleteToDo,
}

export default store
