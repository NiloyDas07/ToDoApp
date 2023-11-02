function addItem(){
  const todoText = document.querySelector('#todoText');
  const todoDate = document.querySelector('#todoDate');

  todoList.push({todo: todoText.value, date: todoDate.value});
  console.log(todoList);
  localStorage.setItem('todoList', JSON.stringify(todoList));
  todoText.value = '';
  todoDate.value = '';
  display();

}

function display(){
  let content = '';
  for (i = 0; i < todoList.length; i++){
    content += `<p class="pad todoText">${todoList[i].todo}</p>
              <p class="pad todoDate">${todoList[i].date}</p>
              <button class="delButton" onclick="remove(${i})">Delete</button>`
  }
  document.querySelector('#todoList').innerHTML = content;
}

function remove(index){
  todoList.splice(index, 1);
  localStorage.setItem('todoList', JSON.stringify(todoList));
  display();
}

let todoList = JSON.parse(localStorage.getItem('todoList')) || [];
display();