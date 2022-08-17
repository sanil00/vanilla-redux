import { configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit"

// only redux

// const ADD = "ADD"
// const addToDo = (text) => {
//     return {
//         type: ADD,
//         text,
//     }
// }

// const DELETE = "DELETE"
// const deleteToDo = (id) => {
//     return {
//         type: DELETE,
//         id,
//     }
// }

// const reducer = (state = [], action) => {
//     switch (action.type) {
//         case addToDo.type:
//             return [{ text: action.payload, id: Date.now() }, ...state]
//         case deleteToDo.type:
//             console.log(action)
//             return state.filter((toDo) => {
//                 return toDo.id !== action.payload
//             })
//         default:
//             return state
//     }
// }

// redux toolkit

// const addToDo = createAction("ADD")
// const deleteToDo = createAction("DELETE")

// const reducer = createReducer([], {                             // 위의 방식에서는 state는 immutable했지만 createReducer를 사용할경우 2가지 방식이 있다.
//     [addToDo]: (state, action) => {
//         state.push({ text: action.payload, id: Date.now() })    // 기존에 있던 state를 수정한경우 return 을 하지 않는다. (추가된 mutable)
//     },
//     [deleteToDo]: (state, action) => {
//         return state.filter((toDo) => {                     // 새로운 state로 반환할때는  return을 사용한다.  (기존의 immutable)
//             return toDo.id !== action.payload
//         })
//     },
// })

const toDo = createSlice({
    name: "toDosReducer",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now() })
        },
        remove: (state, action) => {
            return state.filter((toDo) => {
                return toDo.id !== action.payload
            })
        },
    },
})

const store = configureStore({ reducer: toDo.reducer })
export const { add, remove } = toDo.actions
export default store
