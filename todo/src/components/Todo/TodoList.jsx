import React from 'react'
import {Card} from 'react-bootstrap'
import {TodoItem} from './TodoItem'

export const TodoList=({task})=> {
    return (
        <Card className="todolist">
        {task.map(item=><TodoItem item={item}/>)}
        </Card>
    )
}
