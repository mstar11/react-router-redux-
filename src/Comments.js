import React,{ useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import{getUsersCommentAaction} from "./action";
import {useParams} from "react-router-dom" ; 



function Comments() {
        const dispatch =useDispatch()
        const params =useParams();
        // console.log(params.postId)
        const {userscomments} = useSelector((state)=>state.userscomments)
        console.log(userscomments)
        
        

        useEffect(() => {
                dispatch(getUsersCommentAaction(params.postId))
        },[userscomments])
        return <>
        {/* <div className="userIdNumbers">
                        <p>{params.name}</p>
                </div> */}
        <div className="users">
                
          {userscomments.map((item, index) => {
        return (
          <div className="user" key={index}>
            <div className="usersname">
              <p>{item.id}</p>
            </div>
            <div className="userComment">
              <p>{item.email}</p>
              <p>{item.body}</p>
            </div>
          </div>
        );
      })}
   </div>
        </>
}

export default Comments