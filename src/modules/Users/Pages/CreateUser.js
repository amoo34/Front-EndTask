import React, { useState } from "react";
import { CardContainer,CreateButton,FormGroup, Label, Input, Message } from "../Styles/CreateUser";
import { useNavigate } from 'react-router-dom';
// import Navbar from "../../common/components/Navbar";
import Swal from 'sweetalert2'
import axios from 'axios'
import api from "../../../config.json"



function CreateUser(props) {

  const navigate = useNavigate();
  const [user, setUser] = useState({role:"ADMIN",email:""});
  const [error, setError ] = useState({});
  const [createUserLoader,setCreateUserLoader] = useState(false)



  // function to create User
  const createUser = async () => {

    let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let errorObj = {}
    let errorCase = false
    if(!user.name){
      errorCase = true
      errorObj.name = "Name couldnot be empty"
    }
    // if(!user.email){
    //   errorCase = true
    //   errorObj.email = "Email couldnot be empty"
    // }
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
    
    if(!user.address){
      errorCase = true
      errorObj.address = "Address couldnot be empty"
    }
    if(!user.phoneNo){
      errorCase = true
      errorObj.phoneNo = "Phone couldnot be empty"
    }
    if(!user.password){
      errorCase = true
      errorObj.password = "Password couldnot be empty"
    }

    if(errorCase){
      setError(errorObj)
    }
    else{
      setError({})

      try{
        setCreateUserLoader(true)
      
        const data = await axios.post(api.SERVER_ADDRESS+"addUser",{
          ...user
        })
  
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'User has been created',
          showConfirmButton: false,
          timer: 1500
        })

        
        
        setCreateUserLoader(false)
        if(localStorage.getItem("token")){
          navigate('/users')
        }
        else{
          navigate('/')
        }
      }
      catch(error){

        setCreateUserLoader(false)

        if(error.response.status === 401){
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'You are not Authenticated',
            showConfirmButton: false,
            timer: 1500
          })
        }

        else if(error.response.status === 409){
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'User already Existed',
            showConfirmButton: false,
            timer: 1500
          })
        }
  
      }
    }

    
  };

  // Updating User State
  const handleChange = (e) => {
    console.log(user)
    setUser({...user,[e.target.name]:e.target.value});
  };



  return (
    <CardContainer>

      <FormGroup>
        <Label htmlFor="label">Name</Label>
        <Input id="label" onChange={handleChange}  name="name"/>
        {error.name && <Message>{error.name}</Message>}
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input onChange={handleChange} name="email"/>
        {error.email && <Message>{error.email}</Message>}
      </FormGroup>
      <FormGroup>
        <Label>Address</Label>
        <Input onChange={handleChange} name="address"/>
        {error.address && <Message>{error.address}</Message>}
      </FormGroup>
      <FormGroup>
        <Label>Phone No</Label>
        <Input onChange={handleChange} name="phoneNo"/>
        {error.phoneNo && <Message>{error.phoneNo}</Message>}
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input onChange={handleChange} name="password"/>
        {error.password && <Message>{error.password}</Message>}
      </FormGroup>
      <CreateButton disabled={!user} onClick={createUser} disable={createUserLoader}>
        Create User{" "}
      </CreateButton>

    </CardContainer>
  );
}

export default CreateUser