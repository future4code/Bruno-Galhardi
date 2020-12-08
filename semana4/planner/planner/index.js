function addTask() {
 
 const input = document.getElementById('tarefa')
 const inputValue = input.value

const select = document.getElementById('dias-semana')
const selectValue = select.value

const div = document.getElementById(selectValue)
div.innerHTML += `<p>${inputValue}</p>`

tarefa.value = ''

}



