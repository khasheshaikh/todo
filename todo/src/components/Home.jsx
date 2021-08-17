import React,{useState} from 'react'
import {TodoList} from './Todo/TodoList'
import {AddtodoItem} from './Todo/AddtodoItem'
import {Card,Button,Row,Col} from 'react-bootstrap'
import './Todo/Todo.css'



export const Home=()=> {
    const [task, setTask] = useState(["learning react","dinner"])
    const handleAdd=(newtask)=>{
        setTask([...task, newtask])
    }
    const handleDel = (curritem) => {
        const filtered = task.filter((item) => item !== curritem);
        setTask([...filtered]);
      };
    
    return (
        <Card className="home">
        <h2>TODO list</h2>
           <Row>
               <Col md={4}></Col>
               <Col md={4}>
               <AddtodoItem handleAdd={handleAdd} />
                <TodoList task={task} handleDel={handleDel}/>
                
               </Col>
               <Col md={4}></Col>
               
                
               
           </Row>
        </Card>
    )
}
