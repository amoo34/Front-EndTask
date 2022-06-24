import React, { useState, useEffect } from "react";
import { CardContainer,CreateButton,FormGroup, Label, Input, Message } from "../Styles/CreateUser";
// import {Users} from "../../../data"
import Swal from 'sweetalert2'
import axios from 'axios'
import api from "../../../config.json"
import { useNavigate } from 'react-router-dom';
import {  useParams } from "react-router";



function EditUser(props) {

  const navigate = useNavigate();
  const params = useParams()
  const [user, setUser] = useState({});
  const [error, setError ] = useState({});
  


  useEffect(()=>{

    const fetchUser =async()=> {
      try{
        const result = await axios.get(api.SERVER_ADDRESS+`getUser/${params.id}`,{
          headers: { Authorization: localStorage.getItem("token") },
        })
        console.log("Result os ",result)
        setUser(result.data.data.user)
        // setRecords(result.data.totalRecords)
      }
      catch(error){
        console.log(error)
        if(error.response.status === 401){
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'You are not Authenticated',
            showConfirmButton: false,
            timer: 1500
          })
        }
        else if(error.response.status === 400){
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Bad Request',
            showConfirmButton: false,
            timer: 1500
          })
        }
      }
    }

    // Fetch User
    fetchUser()
  },[])

  // function to Edit User
  const editUser = async (id) => {
    // props.history.push("/list-tasks");

    let errorObj = {}
    let errorCase = false
    if(!user.name){
      errorCase = true
      errorObj.name = "Name couldnot be empty"
    }
    if(!user.email){
      errorCase = true
      errorObj.email = "Email couldnot be empty"
    }
    if(!user.address){
      errorCase = true
      errorObj.address = "Address couldnot be empty"
    }
    if(!user.phoneNo){
      errorCase = true
      errorObj.phoneNo = "Phone couldnot be empty"
    }

    if(errorCase){
      setError(errorObj)
    }
    else{
      setError({})

      try{
        const result = await axios.patch(api.SERVER_ADDRESS+`updateUser/${params.id}`,
        {
          ...user
        },{
          headers: { Authorization: localStorage.getItem("token") },
        })
        console.log("Result os ",result)
        setUser(result.data.data.user)
        navigate("/users")
        // setRecords(result.data.totalRecords)
      }
      catch(error){
        console.log(error)
        if(error.response.status === 401){
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'You are not Authenticated',
            showConfirmButton: false,
            timer: 1500
          })
        }
        else if(error.response.status === 400){
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Bad Request',
            showConfirmButton: false,
            timer: 1500
          })
        }
      }
    }

    

  };
  // function to update User Data
  const handleChange = (e) => {
    // const copyUser = {...user}
    // copyUser[e.target.name] = e.target.value
    // console.log(user,e.target.name,e.target.value)
    // setUser(copyUser)
    setUser({...user,[e.target.name]:e.target.value});
  };

  return (
    <CardContainer>

      <FormGroup>
        <Label htmlFor="label">Name</Label>
        <Input id="label" onChange={handleChange} value={user.name} name="name"/>
        {error.name && <Message>{error.name}</Message>}
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input onChange={handleChange} value={user.email} name="email"/>
        {error.email && <Message>{error.email}</Message>}
      </FormGroup>
      <FormGroup>
        <Label>Address</Label>
        <Input onChange={handleChange} value={user.address} name="address"/>
        {error.address && <Message>{error.address}</Message>}
      </FormGroup>
      <FormGroup>
        <Label>Phone No</Label>
        <Input onChange={handleChange} value={user.phoneNo} name="phoneNo"/>
        {error.phoneNo && <Message>{error.phoneNo}</Message>}
      </FormGroup>
      <CreateButton disabled={!user} onClick={editUser}>
        Edit User
      </CreateButton>

    </CardContainer>
  );
}

export default EditUser