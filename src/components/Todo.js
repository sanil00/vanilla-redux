import React from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { remove } from "../store"

function ToDo({ text, id }) {
    const dispatch = useDispatch()
    const deleteToDo = () => {
        // console.log(state)
        // console.log(rest)
        dispatch(remove(id))
    }

    return (
        <li>
            <Link to={`/${id}`}>{text}</Link>
            <button onClick={deleteToDo}>DEL</button>
        </li>
    )
}

export default ToDo
