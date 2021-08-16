import React,{useState} from 'react'
import {TodoList} from './Todo/TodoList'
import {AddtodoItem} from './Todo/AddtodoItem'
import {Card,Button,Row,Col} from 'react-bootstrap'
import './Todo/Todo.css'



export const Home=()=> {
    const [task, setTask] = useState(["learning react","food"])
    const handleAdd=(newtask)=>{
        setTask([...task, newtask])
    }
    return (
        <Card className="home">
        <h2>TODO list</h2>
           <Row>
               <Col md="4"></Col>
               <Col md={4}>
                <TodoList task={task}/>
                <AddtodoItem handleAdd={handleAdd}/>
               </Col>
               <Col md={4}></Col>
               
                
               
           </Row>
        </Card>
    )
}
