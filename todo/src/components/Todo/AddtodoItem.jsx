
import React,{useState} from 'react'
import {Card,Form,Button,Row,Col} from 'react-bootstrap'
import { IoAddCircleOutline } from 'react-icons/io5';

export const AddtodoItem=({handleAdd})=> {
    const [newTodo, setNewTodo] = useState("");

const [newTask,setNewTask]= useState("");
    return (
        
            <Row className="addtodo">
            <Col md={9}>
            <Form.Control type="text"  placeholder="type a task..." onChange={(e)=>setNewTask(e.target.value)}></Form.Control>
            </Col>
            <Col md={3}>
            
            <IoAddCircleOutline 
            className="de"
            disabled={newTask === ""} 
            onClick={()=>{handleAdd(newTask)}}/>
            </Col>    
            </Row>
        
    )
}
