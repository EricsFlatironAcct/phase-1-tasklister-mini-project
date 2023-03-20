document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById(`create-task-form`).addEventListener('submit', (e)=>{
    e.preventDefault();
    e.stopImmediatePropagation();
    addItem(e.target['new-task-description'].value); 
  });

});
function addItem(newItem){
  const newLi = document.createElement('li');
  newLi.textContent = `${newItem}  `;
  const newBtn = document.createElement('button');
  newBtn.textContent = "x";
  newBtn.addEventListener('click', handleDelete);
  newLi.appendChild(newBtn);
  document.querySelector('#tasks').appendChild(newLi);
}
function handleDelete(e){
  e.target.parentNode.remove();
}
