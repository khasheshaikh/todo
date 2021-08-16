import React,{useState} from 'react'
import {Card,Row,Col,Form} from 'react-bootstrap'

export const TodoItem=({item})=> {
    const [check, setCheck] = useState("");
    return (
        <Card className="todoitem">
            <Row>
                <Col md={1}>
                    <Form.Check onClick={()=>setCheck(!check)}></Form.Check>
                </Col>
                <Col md={10}>
                    <Form.Label>
                    {check ? <del>{item}</del> : item}
                    </Form.Label>
                </Col>
            </Row>
        </Card>
    )
}
