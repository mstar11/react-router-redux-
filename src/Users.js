import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./App.css";
function Users() {
  const {looding,errore,users} = useSelector((state) => state.users);
  // const {usersposts} = useSelector((state) => state.usersposts);
  console.log(users)
  
  return <>
        <div className="users">
        {users.map((item, index) => {
            return (
              <div className="user" key={index}>
                <div className="usersname">
                  <p>{item.username}</p>
                </div>
                <div className="userstitle">
                  <p>{item.name}</p>
                  <p>{item.email}</p>
                  <p>{item.company.name}</p>
                  <p>{item.phone}</p>
                </div>
              </div>
            );
          })}
          </div>
   
  
  </>
}

export default Users;
