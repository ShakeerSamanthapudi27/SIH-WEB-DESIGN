import { useState } from "react";
export default function Use()
{
    const[color,setColor] = useState("Red");
    return(
        <div>
            <p>Your color {color}</p>
            <button onClick={setColor("Pink")}>Pink Color</button>
        </div>
    )
}
