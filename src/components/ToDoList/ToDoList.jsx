export default function ToDoList ({list, onChangeCheck}) {
    return (
        <ul>
            {list.map((toDo, index) => 
            <li key={index}>
                <input type="checkbox" checked={toDo.isDone} onChange={(e) => onChangeCheck(e.target.checked, index)}/>
                <span className={toDo.isDone ? "checked" : ''}>{toDo.name}</span>
            </li>
            )}
        </ul>
    );
}