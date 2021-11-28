document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');
  
    document.querySelector('#new-item-form').addEventListener('submit', handleFormSubmit);
  
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete all";
    deleteButton.type = 'button';
    const newForm = document.querySelector('#new-item-form');
    newForm.appendChild(deleteButton);

    deleteButton.addEventListener('click', handleButtonClick);
  })
  
  
  
  const handleFormSubmit = function (event) {
  event.preventDefault();
  const newListItem = document.createElement('li');
  newListItem.textContent = `${event.target.name.value} ${event.target.age.value} ${event.target.sport.value}`
  const list = document.querySelector('ul');
  list.appendChild(newListItem);
  this.reset();
  };
  
  
  const handleButtonClick = function (event) {
  document.querySelector('#favourtie_Sports_Stars').textContent = "";
  }