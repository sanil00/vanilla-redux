import {configureStore} from '@reduxjs/toolkit'


const form = document.querySelector('form')
const input = document.querySelector('input')
const ul = document.querySelector('ul')


const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'

const addToDo = text => {           //object return 함수를 따로 써주는것이 좋다 보통 reducer위에 배치한다.
    return {type:ADD_TODO,text}     // 코드를 최적화하는 방법중 하나
}
const deleteToDo = id => {
    return {type:DELETE_TODO, id}
}


const reducer = (state=[],action) => {
    switch(action.type){
        case ADD_TODO:
            // return state.push(action.text)   // 여기서 state는 mutable처럼 사용해서는 안된다
            const newToDoObj = {text:action.text , id:Date.now()}   // 객체를 바로 넣는것이 안좋은듯 하다
            return [newToDoObj,...state] // 이렇게 새로운 state를 만들어서 return해야한다.
        case DELETE_TODO:
            console.log(state)
            const cleaned = state.filter(toDo=>{ //filter를 사용하는 이유는 filter는 새로운 array를 반환하기 때문에 state를 transmute하지 않는다.  transmute: 변화시키다.
                return toDo.id !== action.id
            }
            );
            return cleaned
        default:
            return state;

    }

}

const store = configureStore({reducer})



const dispatchAddToDo = (text) => {
    store.dispatch(addToDo(text))
}
const dispatchDeleteToDo = (event) =>{
    const id = parseInt(event.target.parentNode.id)
    store.dispatch(deleteToDo(id))
}


const paintToDo= () =>{
    const toDos= store.getState()
    ul.innerHTML =''
    toDos.map((toDo)=>{
        const li = document.createElement('li')
        const btn = document.createElement('button')
        btn.innerText= 'DEL'
        btn.addEventListener('click',dispatchDeleteToDo)
        li.id = toDo.id
        li.innerText = toDo.text
        li.appendChild(btn)
        ul.appendChild(li)

    })
}
store.subscribe(paintToDo)


const onSubmit = (e) => {
    e.preventDefault()
    const toDo = input.value;
    input.value = "";
    dispatchAddToDo(toDo)
}



// const createToDo = toDo =>{
//     const li = document.querySelector('li');
//     li.innerText= toDo
//     ul.appendChild(li)
// }

// const onSubmit = e =>{
//     e.preventDefault()
//     const toDo = input.value;
//     input.value = "";
//     createToDo(toDo);
// }

form.addEventListener('submit', onSubmit)