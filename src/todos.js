
import uuidv4 from 'uuid/v4'
// Setup the empty todos array
let todos = []

// loadTodos
// Arguments: none
// Return value: none
const loadTodos = () => {
    const todoJSON = localStorage.getItem('todos')
    try{
        todos =  todoJSON ? JSON.parse(todoJSON): []
    }catch(e){
        todos = []
    }
}


// saveTodos
// Arguments: none
// Return value: none
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// getTodos
// Arguments: none
// Return value: todos array
const getTodos = () => todos


// createTodo
// Arguments: todo text
// Return value: none
const createTodo = (text) => {
       todos.push({
        id: uuidv4(),
        text : text,
        completed : false
    })
    saveTodos()
}


// removeTodo
// Arguments: id of todo to remove
// Return value: none
const removeTodos = (id) =>{
    const todoIndex = todos.findIndex( (todo)=>todo.id === id)

    if(todoIndex >-1){
        todos.splice(todoIndex, 1)
        saveTodos()
    }
}


// toggleTodo
// Arguments: id of todo to toggle
// Return value: none
const toggleTodos = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    if(todo){
        todo.completed = !todo.completed
        saveTodos()
    }
}

// Make sure to call loadTodos and setup the exports
loadTodos()

export{ loadTodos, getTodos, createTodo, removeTodos, toggleTodos}