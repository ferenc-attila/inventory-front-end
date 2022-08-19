const people = [
    { name: "Alex Merced", age: 35 },
    { name: "Bob Jones", age: 65 },
    { name: "Steve Smith", age: 22 },
    { name: "Macie Willis", age: 32 },
    { name: "John Jingle", age: 40 },
  ];

const crudDiv = document.getElementById("crud");
const nameInput = document.querySelector('input[name = "name"]');
const ageInput = document.querySelector('input[name = "age"]');
const createButton = document.getElementById("createItem");

const renderData = () => {
  crudDiv.innerHTML = "";

  for (person of people) {
    const crudTitle = document.createElement("h2");
    crudTitle.innerText = `${person.name} is ${person.age} years old`
    crudDiv.appendChild(crudTitle);
  }
}

const createData = () => {
  const name = nameInput.value;
  const age = ageInput.value;
  const newPerson = { name, age };
  people.push(newPerson);
  renderData();
}

renderData();
createButton.addEventListener("click", createData);