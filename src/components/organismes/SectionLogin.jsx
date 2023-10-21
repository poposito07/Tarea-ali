import { useState } from "react";
import Input from "../molecules/Input";

function SectionLogin() {    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handlerChangeUsername = (e) => {
        setUsername(e.target.value);
    }

    return ( 
        <div>
            <Input name="username" title="Username" type="text" onchange={handlerChangeUsername}/>
           {/* <Input name="password" title="Password" type="password"/> */}
            <button onClick={()=>alert(username)}>Iniciar sesion</button>
        </div>
    );
}

export default SectionLogin;