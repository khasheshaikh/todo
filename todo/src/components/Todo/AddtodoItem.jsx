
import React,{useState} from 'react'
import {Card,Form,Button,Row,Col} from 'react-bootstrap'

export const AddtodoItem=({handleAdd})=> {
const [newTask,setNewTask]= useState("");
    return (
        
            <Card className="addtodo">
            <Form.Control type="text" onChange={(e)=>setNewTask(e.target.value)}></Form.Control>
            <Button 
            onClick={()=>{handleAdd(newTask)
            }}>Add TODO</Button>
                
            </Card>
        
    )
}
