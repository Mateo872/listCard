import checkComplete from "./components/checkComplete.js";
import deleteItem from "./components/deleteItem.js";

const btnCreate = document.querySelector("[data-form-btn]");
const cardList = document.querySelector("[data-list]");

function listNew(e) {
  e.preventDefault();

  const input = document.querySelector("[data-form-input]");
  const value = input.value;
  const card = document.createElement("li");
  const titleTask = document.createElement("span");
  const trash = document.createElement("i");
  const taskContent = document.createElement("div");

  input.value = "";

  trash.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
  card.classList.add("card");
  titleTask.classList.add("task");

  titleTask.innerText = value;

  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);

  card.appendChild(taskContent);
  cardList.appendChild(card);
  card.appendChild(trash);

  trash.addEventListener("click", deleteItem);
}

btnCreate.addEventListener("click", listNew);
