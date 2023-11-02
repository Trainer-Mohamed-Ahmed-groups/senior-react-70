import { useReducer } from "react"

export default function Reducer() {
    let counterReducer = (state, action) => {
        if (action === "INCREAMENT") return ++state
        if (action === "DECREAMENT") return --state
        if (action === "RESET") return state = 0
        else throw new Error("Not valid action")
    }
    const [count, dispatch] = useReducer(counterReducer, 0)
    return (
        <div>
            <h2>Reducer</h2>
            <h3>count : {count}</h3>
            <button onClick={() => dispatch("INCREAMENT")}>Increase</button>
            <button onClick={() => dispatch("DECREAMENT")}>Decrease</button>
            <button onClick={() => dispatch("RESET")}>Reset</button>
            <button onClick={() => dispatch("OK")}>other</button>
        </div>
    )
}
