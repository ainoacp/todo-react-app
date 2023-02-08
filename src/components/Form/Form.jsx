import { useRef } from "react";

export default function Form({onSubmit}) {
    const inputRef = useRef();
    const submit = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value)
        onSubmit({name: inputRef.current.value, isDone: false});
    };
    
    return(
        <form onSubmit={submit}>
            <label>Task</label>
            <input ref={inputRef} className="fn-input-list" type="text" />
            <button>Enviar</button>
        </form>
    );
}