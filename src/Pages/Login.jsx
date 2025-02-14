import React from 'react'
import{Row ,Col,Card ,Input,Button, Flex } from'antd';
import { Link } from 'react-router-dom'; 
import anime from '../Asserts/Anime-Kakashi-Wallpaper-HD-105646.jpg'


const Login = () => {
  return (
  
    <form style={{ border: "50px", marginTop: "300px" }}>

    <Row style={{ textAlign:"center", justifyContent:"center" }}>
        <Col style={{ backgroundImage: "url(anime)", backgroundSize: "cover", backgroundPosition:"fixed"}}>
       
        <h1 style={{ color: "red" }}>login page</h1>

        <p style={{ color: "white", fontSize:"20px", display:"flex", }} > enter your name:</p>
          <Input type=" enter your name " placeholder="enter your name" />

          <p style={{ color: "white", fontSize: "20px", display: "flex", }} > enter your password:</p>
          <Input type="password" placeholder="enter your password" />
            

      <Button > </Button>


      </Col>
    </Row>
    </form >
    
  )
}

export default Login
 