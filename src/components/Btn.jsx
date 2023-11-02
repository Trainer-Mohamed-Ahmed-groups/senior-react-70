import React from "react";
function Btn({ handleCounter }) {
    var randomColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);

    return (
        <button style={{ background: randomColor() }} onClick={handleCounter}>Add</button>
    )
}

export default React.memo(Btn)