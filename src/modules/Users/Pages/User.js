// only needs to be imported once

// Table data as an array of objects

import React, { useEffect,useState } from "react";
import {Item,ItemText,ItemBtn,TableWrapper,ItemHeader} from "../Styles/User"
import { InfiniteLoader, List } from "react-virtualized";
import "react-virtualized/styles.css";
import {Users} from "../../../data"
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import axios from 'axios'
import api from "../../../config.json"
// This example assumes you have a way to know/load this information

export default function TestUser() {
  const [users, setUsers] = React.useState([]);
  const [records,setRecords] = useState()

  useEffect(()=>{
    setUsers(Users)
    setRecords(Users.length*3)
  },[])
  const [isNextPageLoading, setIsNextPageLoading] = React.useState(false);
  const [pageNo,setPageNo] = useState(1)
  function isRowLoaded({ index }) {
    return !!users[index];
  }

  
  console.log("iamCalled");
  function handleNewPageLoad({ startIndex, stopIndex }) {
    console.log("iamCalled");
    setIsNextPageLoading(true);
    setPageNo(pageNo+1)
    console.log(pageNo+1)
    setTimeout(() => {
      setUsers((p) => [...p, ...Users]);
      setIsNextPageLoading(false);
    }, 1000);
  }

  const rmvUser = async(id) =>{
    try{
      const data = await axios.delete(api.SERVER_ADDRESS+"deleteUser/"+id)
    }
    catch(error){
    }
    console.log(id)
  }

  function rowRenderer({ key, index, style }) {
    return (
      <div key={key} style={style}>
        {/* {users.map((item, index) => ( */}
              <Item key={index}>
                <ItemText>
                  {users[index]?.name}
                  
                </ItemText>
                <ItemText>
                  {users[index]?.role}
                  
                </ItemText>
                <ItemText>
                  {users[index]?.email}
                  
                </ItemText>
                <ItemText>
                  {users[index]?.address}
                  
                </ItemText>
                <ItemText>
                  {users[index]?.phone}
                  
                </ItemText>

                <ItemText>
                  <Link to={'/edit-users/'+users[index]?.id}>Edit</Link>
                <ItemBtn onClick={() => rmvUser(users[index]?.id)}> 
                Delete
                    {/* ss */}
                  </ItemBtn>
                  </ItemText>
              </Item>
            {/* ))} */}
        {/* {users[index]?.name + "      " + users[index]?.email} {index} */}
      </div>
    );
  }
  const loadMoreRows = isNextPageLoading ? () => {} : handleNewPageLoad;
  return (
    <TableWrapper>
      <InfiniteLoader
        isRowLoaded={isRowLoaded}
        loadMoreRows={loadMoreRows}
        rowCount={records}
      >
        {({ onRowsRendered, registerChild }) => (
          <List
            height={300}
            onRowsRendered={onRowsRendered}
            ref={registerChild}
            rowCount={users?.length}
            rowHeight={30}
            rowRenderer={rowRenderer}
            width={700}
          />
        )}
      </InfiniteLoader>
      {isNextPageLoading && <span>Loading...</span>}
    </TableWrapper>
  );
}
