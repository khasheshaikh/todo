import React,{useState} from 'react'
import {Card,Row,Col,Form} from 'react-bootstrap'
import { ImBin } from 'react-icons/im';

export const TodoItem=({item,handleDel})=> {
    
    
    const [check, setCheck] = useState("");
    return (
        <Card className="todoitem">
            <Row>
                <Col md={2}>
                    <Form.Check onClick={()=>setCheck(!check)}></Form.Check>
                </Col>
                
                <Col md={8}>
                    <Form.Label>
                    {check ? <del>{item}</del> : item}
                    </Form.Label>
                </Col>
                <Col md={2}>
                    <ImBin onClick={() => handleDel(item)}/>
                </Col>
            </Row>
        </Card>
    )
}
