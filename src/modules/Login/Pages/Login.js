/* eslint-disable react/react-in-jsx-scope */
// Import React
import React, { useEffect, useState } from 'react'
// Import useNavigate from react-router-dom
import { useNavigate } from 'react-router-dom'
import {CardContainer,LoginForm,LoginInputGroup,Button,LoginInputField,LoginInputLabel,Message} from "../Styles/Login.js"
import Swal from 'sweetalert2'
import axios from 'axios'
import api from "../../../config.json"



function Login() {

  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [error, setError ] = useState({});



  // handleSignIn Button
  const handleSubmit = async(e) => {
    // console.log("S")
    e.preventDefault()

    let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let errorObj = {}
    let errorCase = false
    if(!user.password){
      errorCase = true
      errorObj.password = "Password couldnot be empty"
    }
    
    console.log(user.email,user.email.match(mailFormat))
    if(!user.email.match(mailFormat)){
      errorCase = true
      if(!user.email){
        // errorCase = true
        errorObj.email = "Email couldnot be empty"
      }
      else{
        errorObj.email = "Invalid Email Format"
      }
    }
    

    if(errorCase){
      setError(errorObj)
    }
    else{
      setError({})
    }

    console.log(errorObj)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'User has been Login',
      showConfirmButton: false,
      timer: 1500
    })
    
    try{
   
      const result = await axios.post(api.SERVER_ADDRESS+"login",{
        ...user
      })
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'User has been created',
        showConfirmButton: false,
        timer: 1500
      })
      // console.log(data)
      localStorage.setItem("token",result.data.data.token)
      navigate('/users')
    }
    catch(error){
   
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Login Failed',
        showConfirmButton: false,
        timer: 1500
      })

    }
  }

  const handleChange = (e) => {
    setUser({...user,[e.target.name]:e.target.value});
  };



  return (
    <CardContainer>

        <LoginForm onSubmit={handleSubmit}>
          <LoginInputGroup>
            <LoginInputLabel htmlFor="email">Email</LoginInputLabel>
            <LoginInputField type="text" name="email" onChange={handleChange} />
            {error.email && <Message>{error.email}</Message>}
          </LoginInputGroup>
          <LoginInputGroup>
            <LoginInputLabel htmlFor="password">Password</LoginInputLabel>
            <LoginInputField type="password" name="password" onChange={handleChange} />
            {error.password && <Message>{error.password}</Message>}
          </LoginInputGroup>
          <Button className="primary">Login</Button>
        </LoginForm>

      </CardContainer>
  )
}

export default Login