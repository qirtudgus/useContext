import React, { useContext } from "react";
import {UserContext} from "./App";
import User2 from './User2';

const User = () => {
    const Userinfo = useContext(UserContext);
    return(
        <div>{Userinfo.name}<p>{Userinfo.age}</p>
             <User2/>
        </div>
    )
}

export default User;