import React, { useState } from "react"

function UserInput(params) {
    // let login= React.createRef();
    const [login, setLogin] = useState("");
    const handleSubmit = async (event)=> {
        event.preventDefault();
        const resp = await fetch(`https://api.github.com/users/${login}`);
        const data = await resp.json(); 
        // console.log(data);
        params.onSubmit(data);
        setLogin("");
        // console.log( login.current.value);
        // console.log(login)
    };
    return (
        <form onSubmit={handleSubmit}>
            {/* <input type="text" placeholder="Github login" ref={login}/> */}
            <input 
            type="text" 
            placeholder="Github login" 
            value={login}
            onChange={event => setLogin(event.target.value) }
            />
            <button>Add Card</button>
        </form>
    );
}


export default UserInput;