import React, { useEffect,useState } from "react";
import {Item,ItemText,ItemBtn,TableWrapper,ItemHeader} from "../Styles/User"
import { InfiniteLoader, List } from "react-virtualized";
import "react-virtualized/styles.css";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import axios from 'axios'
import api from "../../../config.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faPenToSquare } from '@fortawesome/free-solid-svg-icons'



export default function TestUser() {

  const [users, setUsers] = React.useState([]);
  const [records,setRecords] = useState()
  const [isNextPageLoading, setIsNextPageLoading] = React.useState(false);
  const [pageNo,setPageNo] = useState(1)



  useEffect(()=>{
    
    const fetchUsers =async()=> { 
      try{
        const result = await axios.get(api.SERVER_ADDRESS+"getUsers?page=1",{
          headers: { Authorization: localStorage.getItem("token") },
        })
        setUsers(result.data.data.user.users)
        setRecords(result.data.data.user.totalRecords)
      }
      catch(error){
        console.log(error)
      }
    }

    // Fetch Users Data
    fetchUsers()
  },[])
  
  function isRowLoaded({ index }) {
    return !!users[index];
  }

  // Fetch New Users when we scroll Down to bottom
  const handleNewPageLoad =async({ startIndex, stopIndex })=> {
    console.log("iamCalled");
    setIsNextPageLoading(true);
    setPageNo(pageNo+1)

    try{
      const result = await axios.get(api.SERVER_ADDRESS+`getUsers?page=${pageNo+1}`,{
        headers: { Authorization: localStorage.getItem("token") },
      })
      setIsNextPageLoading(false);
      setUsers((user)=>[...user,...result.data.data.user.users])
    }
    catch(error){
      setIsNextPageLoading(false);
      console.log(error)
    }
  }

  // Remove a Specific User
  const rmvUser = async(id) =>{
    try{
      const result = await axios.delete(api.SERVER_ADDRESS+"deleteUser/"+id,{
        headers: { Authorization: localStorage.getItem("token") },
      })
      let updatedUsers = users.filter(user=>{
        return result.data.data !== user._id
      })

      setUsers(updatedUsers)
      console.log("data ",result.data.data)
    }
    catch(error){
    }
    console.log(id)
  }

  // Function to Render Table Rows
  function rowRenderer({ key, index, style }) {
    return (
      <div key={key} style={style}>
        {/* {users.map((item, index) => ( */}
              <Item key={index}>
                <ItemText>
                  {users[index]?.name}
                  
                </ItemText>
                <ItemText>
                  {users[index]?._id}
                  
                </ItemText>
                <ItemText>
                  {users[index]?.email}
                  
                </ItemText>

                <ItemText>
                  <Link to={'/edit-users/'+users[index]?._id} style={{marginLeft:'15px'}}>
                  <FontAwesomeIcon icon={faPenToSquare} />
                  </Link>
                {/* <ItemBtn o>  */}
                {/* Delete */}
                {/* <FontAwesomeIcon icon="fa-thin fa-trash-can" /> */}
                <FontAwesomeIcon icon={faTrash} onClick={() => rmvUser(users[index]?._id)}/>
                    {/* ss */}
                  {/* </ItemBtn> */}
                  </ItemText>
              </Item>
            {/* ))} */}
        {/* {users[index]?.name + "      " + users[index]?.email} {index} */}
      </div>
    );
  }

  // Check whether to Fetch New Users or Not on Scrolling Down
  const loadMoreRows = isNextPageLoading ? () => {} : handleNewPageLoad;



  return (
    <TableWrapper>

      <Item >
        <ItemText>
          Name  
        </ItemText>
        <ItemText>
          ID   
        </ItemText>
        <ItemText>
          EMAIL    
        </ItemText>
        <ItemText>
          ACTION
        </ItemText>
      </Item>
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
            width={1}
            containerStyle={{
              width: "100%",
              maxWidth: "100%"
            }}
            style={{
              width: "100%"
            }}
          />
        )}
      </InfiniteLoader>
      {isNextPageLoading && <span>Loading...</span>}

    </TableWrapper>
  );
}
