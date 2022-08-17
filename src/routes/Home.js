import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ToDo from "../components/Todo"
import { add } from "../store"

const Home = () => {
    const [text, setText] = useState("")
    function onChange(e) {
        setText(e.target.value)
    }

    const toDo = useSelector((state) => state)
    const dispatch = useDispatch()

    function onSubmit(e) {
        e.preventDefault()
        dispatch(add(text))
        setText("")
    }
    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>
                {toDo.map((toDo) => {
                    return <ToDo {...toDo} key={toDo.id} />
                })}
            </ul>
        </>
    )
}
// connect 를 사용할때 이렇게 사용했지만 hook 을 사용해서
// function mapStateToProps(state, ownProps) {    //  mapStateToProps 는  useSelector((state) => state) 로
//     console.log(state, ownProps)
//     return { text: state, sexy: true }
// }
// function mapDispatchToProps(dispatch) {         // mapDispatchToProps 는  useDispatch() 로 바꿔서 사용한다.
//     return {
//         addTodo: (text) => dispatch(actionCreators.addToDo(text)),
//     }
// }
//export default connect(mapStateToProps, mapDispatchToProps) (Home) // connect는 사용하지 않는다.
export default Home 
