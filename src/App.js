import './App.css';
import './components/ToDoList/ToDoList'
import './components/Form/Form'
import ToDoList from './components/ToDoList/ToDoList';
import Form from './components/Form/Form';
import { useState } from 'react';

function App() {

  const [toDoList, setToDoList] = useState([{name: "Aprender react", isDone: false}]);
  const addNewToDo = (data) => {
    setToDoList([...toDoList, data])
  }
  const changeIsDone = (isDone, index) => {
    const copyList = [...toDoList]
    copyList[index] = {...copyList[index], isDone};
    setToDoList(copyList);
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <section className='App-main'>
        <br></br>
        <br></br>
        <Form onSubmit={addNewToDo}></Form>
        <ToDoList onChangeCheck={changeIsDone} list={toDoList}></ToDoList>
      </section>
    </div>
  );
}

export default App;
