function Input({name, title, type, onchange}) {
    return(
        <div>
            <label htmlFor={name}>{title}</label>
            <input id={name} type="type" onChange={onchange}/>

        </div>
    )
}

export default Input;