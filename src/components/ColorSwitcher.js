import { useState } from "react"
// useState hook. Creates a variable that is reactive. 
// Hooks have to be used in a function component. Cannot be used in a conditional. 

function ColorSwitcher() {
    console.log('The Component Has Been Rendered!')

    let [color, setColor] = useState("green");

    console.log("On this render, the color is", color)

    return <div>
        <div style={{
            width: "200px",
            height: "200px",
            border: "3px solid black",
            margin: "auto",
            backgroundColor: color
        }}>

        </div>
        <div style={{ textAlign: "center", margin: "20px" }}>
            <button onClick={() => {
                setColor("orange")
            }}>Orange</button>
            <button onClick={() => {
                setColor("yellow")
            }}>Yellow</button>
            <button onClick={() => {
                setColor("Grey")
            }}>Grey</button>
            {/* when the button is clicked it runs the function 'setColor' which is triggering a rerender  */}
        </div>
    </div>
}
export default ColorSwitcher