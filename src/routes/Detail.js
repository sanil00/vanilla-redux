import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const Detail = () => {
    const params = useParams()
    const toDo = useSelector((state) => state)
    const currentToDo = toDo.find((toDo) => {
        return toDo.id === parseInt(params.id)
    })
    return (
        <div>
            {currentToDo?.text}..{currentToDo?.id}
        </div>
    )
}
export default Detail
