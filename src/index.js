import {createStore} from 'redux' 
import {configureStore} from '@reduxjs/toolkit'

// TYPE을 미리 변수로 정의하면 오타가 발생해도 실행시에 오타를 잡아낼수있다./
const ADD = 'ADD'
const MINUS = 'MINUS'


const countModifier = (count= 0, action)=>{
    // if(action.type === 'ADD'){
    //     return count+1;
    // } else if (action.type === 'MINUS'){
    //     return count-1
    // }else{
    //     return count;
    // }
    //reudx 공식문서에서는 위의 코드대신 아래의 switch 를 사용하기를 권장한다.
    switch(action.type){
        case ADD:
            return count
        case MINUS:
            return count
        default:
            return count
    }
}

const countStore = configureStore({reducer:countModifier})  // store dispatch, subscribe, getState 를 가지고 있다. 

console.log(countStore)
const onChange = () =>{
    console.log('a')
    document.querySelector('span').innerText=  countStore.getState() // 현재 state 출력
}

countStore.subscribe(onChange) // dispatch가 실행되면 따라서 실행된다.


const clickAdd=  ()=>{
    countStore.dispatch({type:ADD}) // state변경 함수 type을 reducer의 type에서 사용할수있다.
}

const clickMinus=  ()=>{
    countStore.dispatch({type:MINUS})
}


document.getElementById(ADD).addEventListener('click',clickAdd)
document.getElementById(MINUS).addEventListener('click',clickMinus)