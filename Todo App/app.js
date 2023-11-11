// Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

// Event Listeners

todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)

//Custom Alert
function CustomAlert() {
	this.alert = function (message, title) {
		document.body.innerHTML =
			document.body.innerHTML +
			'<div id="dialogoverlay"></div><div id="dialogbox" class="slit-in-vertical"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div></div>'

		let dialogoverlay = document.getElementById('dialogoverlay')
		let dialogbox = document.getElementById('dialogbox')

		let winH = window.innerHeight
		dialogoverlay.style.height = winH + 'px'

		dialogbox.style.top = '100px'

		dialogoverlay.style.display = 'block'
		dialogbox.style.display = 'block'

		document.getElementById('dialogboxhead').style.display = 'block'

		if (typeof title === 'undefined') {
			document.getElementById('dialogboxhead').style.display = 'none'
		} else {
			document.getElementById('dialogboxhead').innerHTML =
				'<i class="fa fa-exclamation-circle" aria-hidden="true"></i> ' +
				title
		}
		document.getElementById('dialogboxbody').innerHTML = message
		document.getElementById('dialogboxfoot').innerHTML =
			'<button class="pure-material-button-contained active" onclick="customAlert.ok()">OK</button>'
	}

	this.ok = function () {
		document.getElementById('dialogbox').style.display = 'none'
		document.getElementById('dialogoverlay').style.display = 'none'
	}
}

let customAlert = new CustomAlert()

//Functions

function addTodo(event) {
	event.preventDefault()
	// If Empty Dont Do Anything
	if (todoInput.value !== '') {
		//Todo Div
		const todoDiv = document.createElement('div')
		todoDiv.classList.add('todo')
		//Create LI
		const newTodo = document.createElement('li')
		newTodo.innerText = todoInput.value
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
		// Empty out the input
		todoInput.value = ''
	} else {
		todoButton.addEventListener(
			'click',
			customAlert.alert('Enter Your Todo', 'Heads UP!')
		)
	}
}

function deleteCheck(e) {
	const item = e.target
	//Delete Todo
	if (item.classList[0] === 'trash-button') {
		const todo = item.parentElement
		//Animation
		todo.classList.add('fall')
		todo.addEventListener('transitionend', function () {
			todo.remove()
		})
	}

	// Check mark
	if (item.classList[0] === 'complete-button') {
		const todo = item.parentElement
		todo.classList.toggle('completed')
	}
}
