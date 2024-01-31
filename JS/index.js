const inputDescription = document.getElementById("description"); //descrizione
const buttonAdd = document.getElementById("submit"); //button
const list = document.getElementById("list"); //lista contenente i list item

buttonAdd.addEventListener("click", function () {
  const description = inputDescription.value;

  if (!description) {
    return;
  }

  const listItem = document.createElement("li");
  listItem.className = "lis";
  listItem.innerText = description;

  const buttonRemove = document.createElement("button");
  buttonRemove.className = "removeb";
  buttonRemove.innerText = "x";
  buttonRemove.onclick = function (e) {
    e.currentTarget.closest(".lis").remove();
  };
  list.appendChild(listItem);
  listItem.appendChild(buttonRemove);
  inputDescription.value = "";
});
