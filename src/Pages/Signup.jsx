import React from 'react'
import {Row, Col,Input,Form,Button,Card,Span} from 'antd'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
        <Row>
            <Col style={{justifyContent:'center',display:'flex',alignItems:'center'}} span={24}>
            <Card style={{border:'1px solid black', background:'orange'}}> 
            <Form>
              <h2 style={{justifyContent:'center', display:'flex', fontFamily:'cursive'}}>sign up</h2>
            <Input style={{margin:'10px',}}placeholder='enter your name '/>
            <Input style={{margin:'10px',}} placeholder='phone number '/>
            <Input style={{margin:'10px',}} placeholder='age'/>
             <Button style={{marginTop:'20px'}} color='blue' variant='solid'><Link to='/dashboard'>submit</Link></Button>
         

            
         



            </Form>
            </Card>
            </Col>
        </Row>

      
    </div>
  )
}

export default Signup
