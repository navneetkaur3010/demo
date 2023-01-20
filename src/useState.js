import React, { useState } from "react"

function UserDetails() {

    let [name, setName] = useState("")

    function handleChange(e) {
        setName(e.target.value)
    }

    return (
        <div>

            <input type="text" onChange={handleChange} value="name" />

            {name}

        </div>
    )
}

export default UserDetails