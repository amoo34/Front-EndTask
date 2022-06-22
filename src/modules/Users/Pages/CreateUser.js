import React, { useState } from "react";
import { CardContainer,CreateButton,FormGroup, Label, Input, Message } from "../Styles/CreateUser";
// import { withRouter } from "react-router-dom";
// import Navbar from "../../common/components/Navbar";

function CreateUser(props) {
  const [user, setUser] = useState({});
  const [error, setError ] = useState({});

  // function to create Task
  const createTask = async () => {
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
    if(!user.role){
      errorCase = true
      errorObj.role = "Role couldnot be empty"
    }
    if(!user.phone){
      errorCase = true
      errorObj.phone = "Phone couldnot be empty"
    }

    if(errorCase){
      setError(errorObj)
    }
    else{
      setError({})
    }

    console.log(error)
  };

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
      <Label>Role</Label>
      <Input onChange={handleChange} name="role"/>
      {error.role && <Message>{error.role}</Message>}
    </FormGroup>
    <FormGroup>
      <Label>Phone No</Label>
      <Input onChange={handleChange} name="phone"/>
      {error.phone && <Message>{error.phone}</Message>}
    </FormGroup>

      <CreateButton disabled={!user} onClick={createTask}>
        Create User{" "}
      </CreateButton>

    </CardContainer>
  );
}

export default CreateUser