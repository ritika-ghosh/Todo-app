// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// --

// Add necessary imports
import { createTodo, loadTodos } from './todos'
import {setFilters } from './filters'
import {renderTodos} from './views'



// Render initial todos
renderTodos()


// Set up search text handler
document.querySelector('#search-text').addEventListener('input', (e)=> {
    setFilters({
        searchText: e.target.value
    })
    renderTodos()
})

// Set up checkbox handler
document.querySelector('#for-fun').addEventListener('change', (e)=>{
    setFilters({
        hide: e.target.checked
    })
    renderTodos()
})

// Set up form submission handler
document.querySelector('#todo-form').addEventListener('submit', (e) =>{
    const text= e.target.elements.text.value.trim()
    e.preventDefault()
    
    if(text.length > 0){
        createTodo(text)
        renderTodos()
        e.target.elements.text.value = ''
    }
})

// Bonus: Add a watcher for local storage
window.addEventListener('storage', (e)=>{
    if(e.key === 'todos'){
        loadTodos()
        renderTodos()
    }
})