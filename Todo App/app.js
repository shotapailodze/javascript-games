// Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

// Event Listeners

todoButton.addEventListener('click', addTodo)

//Functions

function addTodo(event) {
	event.preventDefault()
	//Todo Div
	const todoDiv = document.createElement('div')
	todoDiv.classList.add('todo')
	//Create LI
	const newTodo = document.createElement('li')
	newTodo.innerText = 'Hey'
	newTodo.classList.add('todo-item')
	todoDiv.appendChild(newTodo)
	//Check Button
	const completedButton = document.createElement('button')
	completedButton.innerHTML = '<i class="fa-solid fa-check"></i>'
	completedButton.classList.add('complete-button')
	todoDiv.appendChild(completedButton)
	//Delete Button
	const trashButton = document.createElement('button')
	trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>'
	trashButton.classList.add('trash-button')
	todoDiv.appendChild(trashButton)
	//Append to list
	todoList.appendChild(todoDiv)
}
