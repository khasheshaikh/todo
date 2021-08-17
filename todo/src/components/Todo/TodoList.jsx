import React from 'react'
import {Card} from 'react-bootstrap'
import {TodoItem} from './TodoItem'

export const TodoList=({task,handleDel})=> {
    return (
        <Card className="todolist">
        {task.map(item=><TodoItem item={item} handleDel={handleDel}/>)}
        </Card>
    )
}
