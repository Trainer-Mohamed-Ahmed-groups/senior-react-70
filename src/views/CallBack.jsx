import { useCallback, useState } from "react"
import Btn from "../components/Btn"

export default function CallBack() {
    let [counter, setCounter] = useState(0)

    let handleCounter = () => {
        setCounter(++counter)
    }

    let handleCallBack = useCallback(handleCounter, [])
    return (
        <div>
            <h2>CallBack</h2>
            <h3>{counter}</h3>
            <Btn handleCounter={handleCallBack} />
        </div>
    )
}
