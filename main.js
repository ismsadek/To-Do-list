var input = document.getElementsByClassName('inputTask')[0];
input.addEventListener('keypress', addTask);

function addTask(e) {
	if(e.keyCode === 13){
		e.preventDefault();
		//alert('hemo sio engañao');
		var task = document.getElementsByClassName('inputTask')[0].value.trim(); //trim quita los espacios de delante y detrás
		//console.log(inputText);
		if(task != "") {
			var liElement = document.createElement('li');
			var text = document.createTextNode(task);

			liElement.appendChild(text);
			liElement.classList.add('todo-element');
			liElement.addEventListener('click', liEventClick); //añado una escucha para los eventos
			document.getElementsByClassName('todo-list')[0].appendChild(liElement);
			document.getElementsByClassName('inputTask')[0].value = "";
		}

	}
}

function liEventClick(e) {
	var elementClicked = e.target;
	//console.log(elementClicked);
	if(elementClicked.classList.contains('todo-element')) {
		elementClicked.classList.remove('todo-element');
		elementClicked.classList.add('done-element')
		document.getElementsByClassName('done-list')[0].appendChild(elementClicked);
	} else if (elementClicked.classList.contains('done-element')) {
		elementClicked.classList.remove('done-element');
		elementClicked.classList.add('todo-element')
		document.getElementsByClassName('todo-list')[0].appendChild(elementClicked);


	}

}