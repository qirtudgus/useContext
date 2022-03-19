import { UserContext } from "./App";
import React from "react";

const User2 = () => {
    const {num, setNum}= React.useContext(UserContext);
    const plus = () => {
        setNum(num + 1)
        console.log("useContext");
    }

    return(
        <>
        <h1>Context prop</h1>
        <h2>{num}</h2>
        <button onClick={plus}>더하기</button>
        </>
    )
}

export default User2;
