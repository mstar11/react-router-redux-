import React,{useState} from "react";
import { useSelector} from "react-redux";
import {Link} from "react-router-dom";
function Posts() {
  const {usersposts}=useSelector(state => state.usersposts)
  const [number, setNumber] = useState(1)
  console.log(number)
  console.log(usersposts)
  return <div>
    <div>{usersposts.length}</div>
    <input placeholder="Post Number" type="number" onChange={(e)=> setNumber(e.target.value) }></input>
   {number > usersposts.length || number <=0 ? <p>Nothing this post </p> :<Link to={number} >Show Posts</Link>} 
  </div>
}
export default Posts;
