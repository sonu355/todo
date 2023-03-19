import React from 'react'

const Form = ({todos, setTodos, setInputText, inputText}) => {
    function inputTextHandler(e) {
        console.log(e.target.value);
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {text: inputText, completed: false, id: Math.floor(Math.random() * 100000)}
        ]);
        setInputText("")
    }
    return (
        <form>
            <input value={inputText} type="text" onChange={inputTextHandler} className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}
export default Form;
