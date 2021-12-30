import React, { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux";
import {getUserAction,getUserPostsAction} from "./action";
import {Link} from "react-router-dom"
function Home() {
  const dispatch = useDispatch()
  const {looding,errore,users} = useSelector((state) => state.users);
  // const {usersposts} = useSelector((state) => state.usersposts);
  useEffect(() => {
    dispatch(getUserAction())
    dispatch(getUserPostsAction())
  },[])
  return <>
   <div>
    <p>{users.length && users.length}</p>
  </div>
    <div className="users">
      <div>
        {users.map((item, index)=>{
          return <div key={index}>
            <Link to={item.id.toString()}>{item.name}</Link>
          </div>
        })}
      </div>
    </div>
    <div>
      <Link to="/users">See All Users</Link>
    </div>
  
  </>;
}

export default Home;
