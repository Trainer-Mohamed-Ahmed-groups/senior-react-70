import { useMemo, useState } from "react"

export default function Memo() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState("")

    let handleFirstName = (ev) => {
        setFirstName(ev.target.value)
    }
    let handleLastName = (ev) => {
        setLastName(ev.target.value)
    }
    let handleAge = (ev) => {
        setAge(ev.target.value)
    }

    var randomColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);


    let fullName = useMemo(
        () => (<h3 style={{ color: randomColor() }}>Full name : {firstName + lastName}</h3>)
        , [firstName, lastName]
    )


    return (
        <div>
            <h2>Memo</h2>
            <input type="text" onChange={handleFirstName} />
            <input type="text" onChange={handleLastName} />
            <input type="text" onChange={handleAge} />
            <hr />
            {fullName}
            <div>First name : {firstName}</div>
            <div>last name : {lastName}</div>
            <div>Age : {age}</div>
        </div>
    )
}
