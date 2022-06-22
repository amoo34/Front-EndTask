/* eslint-disable react/react-in-jsx-scope */
// Import React
import React, { useEffect, useState } from 'react'
// Import useNavigate from react-router-dom
import { useNavigate } from 'react-router-dom'
import {LoginForm,LoginInputGroup,Button,LoginInputField,LoginInputLabel,Message} from "../Styles/Login.js"
function Login() {
  // let navigate = useNavigate()
 
  const [user, setUser] = useState({});
  const [error, setError ] = useState({});

  // handleSignIn Button
  const handleSubmit = (e) => {
    console.log("S")
    e.preventDefault()
    let errorObj = {}
    let errorCase = false
    if(!user.password){
      errorCase = true
      errorObj.password = "Password couldnot be empty"
    }
    if(!user.email){
      errorCase = true
      errorObj.email = "Email couldnot be empty"
    }

    if(errorCase){
      setError(errorObj)
    }
    else{
      setError({})
    }

    console.log(errorObj)
    // try {
    //   fetch(` ${REACT_APP_BACKEND_LOGIN_API}`, {
    //     // mode: `no-cors`,
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json; charset=UTF-8',
    //     },
    //     method: `POST`,
    //     body: JSON.stringify(payload),
    //   })
    //     .then((res) => res.json())
    //     .then((res) => {
    //       if (res.hasError === true) {
    //         setBtnLoading({ loading: false, error: true, network: false })
    //       } else {
    //         setBtnLoading({ loading: false, error: false, network: false })
    //         localStorage.setItem('token', res.data?.employee?.token)
    //         localStorage.setItem('name', res?.data?.employee?.name)
    //         navigate('/dashboard')
    //       }
    //     })
    //     .catch(() => {
    //       setBtnLoading({ loading: false, error: false, network: true })
    //     })
    // } catch (error) {
    //   Swal.fire({
    //     icon: 'error',
    //     title: `Something went wrong!`,
    //   })
    // }
  }

  const handleChange = (e) => {
    console.log(user)
    setUser({...user,[e.target.name]:e.target.value});
  };

  return (
    <div className="loginPage">
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
      </div>
  )
}

export default Login