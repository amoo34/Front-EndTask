import React, { useState,useEffect } from "react";
import {Users} from "../../../data"
// import { CardContainer,CreateButton,FormGroup, Label, Input, Message } from "../Styles/CreateUser";
// import { withRouter } from "react-router-dom";
// import Navbar from "../../common/components/Navbar";

import {
    AutoSizer,
    InfiniteLoader,
    List,
    WindowScroller
  } from "react-virtualized";

import {Item,ItemText,ItemBtn,TableWrapper,ItemHeader} from "../Styles/User"

function User(props) {
  const [users, setUsers] = useState([]);
  
  useEffect(()=>{
    console.log("COnfirm",Users)
    setUsers(Users)
  },[])
  return (
    <TableWrapper>
      <Item >
              <ItemHeader>
                Name
              </ItemHeader>
              <ItemHeader>
                Role
              </ItemHeader>
              <ItemHeader>
                Email
              </ItemHeader>
              <ItemHeader>
                Address
              </ItemHeader>
              <ItemHeader>
                Phone
              </ItemHeader>
              <ItemHeader>
                Action
              </ItemHeader>
        </Item>
        {users.map((item, index) => (
              <Item key={index}>
                <ItemText>
                  {item.name}
                  
                </ItemText>
                <ItemText>
                  {item.role}
                  
                </ItemText>
                <ItemText>
                  {item.email}
                  
                </ItemText>
                <ItemText>
                  {item.address}
                  
                </ItemText>
                <ItemText>
                  {item.phoneNo}
                  
                </ItemText>
                <ItemBtn onClick={() => this.rmvTask(item.id)}>
                    {/* <ImgBtn src={Trash} /> */}
                    ss
                  </ItemBtn>
              </Item>
            ))}
    </TableWrapper>
  );
}

export default User