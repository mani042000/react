import React from 'react'
import{Row ,Col,Card ,Input,Button } from'antd';
import {Link} from 'react-router-dom'; 


const Login = () => {
  return (
    <div>
        <Row>
            <Col style={{display:'flex', justifyContent:'center', alignItems:'center'}} span={24}>
                <Card style={{border:'1px solid black', background:'orange'}}>
                     <h2 style={{backgroundColor:'orange'}}> login</h2> 
                    <Input placeholder='enter your email address'style={{width:'90%'}} />
                    <br/>
                    
                    <Input style={{marginTop:'20px',width:'90%'}} placeholder=' password'/>    
                    <p>Do you have a account let's <Link to='/signup'>sign up</Link></p>
                    <Button style={{marginTop:'20px'}} color='blue' variant='solid'><Link to='/dashboard'>submit</Link></Button>
                             
                </Card>
            </Col>
        </Row>
        
        
    </div>
  )
}

export default Login
