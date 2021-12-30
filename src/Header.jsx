import React from 'react';
import {Link} from "react-router-dom";

function Header() {
        return (
                <div style={{display:"flex",justifyContent:"space-around"}}>
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>                        
                </div>
        )
}

export default Header
