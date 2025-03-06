import React, { useState } from "react";
import { Button } from "./button.jsx";

const BOX_STYLE = {
    background: "black",
    color: "white",
    border: "none",
    padding: 5,
    cursor: "pointer",
    width: "9vw",
    height: "5vw",
    margin: 5,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

}
export const Box = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => { setCount(count + 1) }
    return (
        <div>
            <p style={{textAlign:"center"}}>Count: {count}</p>
            <Button text={"click"} onClick={handleClick} />
        </div>
    )
}

