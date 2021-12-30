import React from "react";
import {useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Userposts() {
  const params = useParams();
 const {usersposts}= useSelector(state=> state.usersposts)
  // console.log(params.numer); //postId or item.postId some one is string dont === you can use tosring( ) or +
console.log(usersposts.length)

  return (
    <>
    {/* <div className="name">
      <p>{posts.length && posts[params.postId -  1 ].name}</p>
    </div> */}
    
    {<div className="users">
              <div className="user" >
                <div className="usersname">
                  <p>{usersposts[params.number - 1 ].id  }</p>
                </div>
                <div className="userstitle">
                  <p>{usersposts[params.number - 1].title}</p>
                  <p>{usersposts[params.number - 1 ].body}</p>
                </div>
              </div>
      </div> }
      
    </>
  );
}

export default Userposts;
