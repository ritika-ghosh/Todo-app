import {getTodos, toggleTodos, removeTodos } from './todos'
import { getFilters } from './filters'


// renderTodos
// Arguments: none
// Return value: none
const renderTodos= () => {
    const todoEl = document.querySelector('#todos')
    const {searchText, hide } = getFilters()
    const filteredTodo = getTodos().filter((todo) =>{
        const searchTextMatch = todo.text.toLowerCase().includes(searchText.toLowerCase())
        const hideCompletedMatch = !hide || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    const incomplete= filteredTodo.filter((todo) => !todo.completed)

todoEl.innerHTML =''
todoEl.appendChild(generateSummaryDOM(incomplete))


if(filteredTodo.length > 0){
    filteredTodo.forEach((todo) => {
        todoEl.appendChild(generateTodoDOM(todo))
    })
}else{
    const messageEl = document.createElement('p')

    messageEl.classList.add('empty-message')
    messageEl.textContent = 'No To-Dos to show'
    todoEl.appendChild(messageEl)
}
}

// generateTodoDOM
// Arguments: todo
// Return value: the todo element
const generateTodoDOM = (todo)=> {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const someNode = document.createElement('input')
    const textEl = document.createElement('span')
    const button = document.createElement('button')

    someNode.setAttribute('type', 'checkbox')
    someNode.checked = todo.completed
    containerEl.appendChild(someNode)
    someNode.addEventListener('change', ()=>{
        toggleTodos(todo.id)
        renderTodos()
    })

    textEl.textContent = todo.text
    containerEl.appendChild(textEl)

    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    button.textContent = 'REMOVE'
    button.classList.add('button', 'button--text')
    todoEl.appendChild(button)
    button.addEventListener('click', ()=> {
        removeTodos(todo.id)
        renderTodos()
    })
    return todoEl
}


// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element
const generateSummaryDOM = (incomplete)=> {
    const newParagraph = document.createElement('h2')
    const plural = incomplete.length === 1 ? '' : 's'
    newParagraph.classList.add('list-title')
    newParagraph.textContent = `You have ${incomplete.length} todo${plural} left.`
    return newParagraph
}


// Make sure to set up the exports
export { renderTodos, generateTodoDOM, generateSummaryDOM}
