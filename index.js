// Сперва получаем доступ к элементам и передаем их в переменные
const input = document.querySelector("#input");
const add_btn = document.querySelector("#add_btn");
const final_list = document.querySelector("#final_list");
const final_count = document.querySelector("#final_count");
let i = 0;

// Затем добавляем на кнопку слушатель клика
add_btn.addEventListener("click", (e) => {
  //  делаем так, чтобы по результату клика на кнопку у нас в список помещалось то,
  //  что введено в поле ввода
  if (input.value === "") return;
  createOrDeleteElements(input.value);
  input.value = "";
});
function createOrDeleteElements(value) {
  // создаем элемент списка
  i++;
  const li = document.createElement("li");
  li.className = "list_element";
  li.textContent = input.value;
  final_list.appendChild(li);

  //добавим кномку удаления выполненных дел из списка
  const removeButton = document.createElement("button");
  removeButton.className = "removeButton";
  removeButton.textContent = "Дело сделано";
  li.appendChild(removeButton);
  removeButton.addEventListener("click", (e) => {
    i--;
    li.className = "hiddenListElement";

    // Добавляем возможность просмотреть выполненное задание
    const showCase = document.createElement("button");
    showCase.className = "showCase";
    showCase.textContent = "Просмотреть выполненное дело ";

    const liForShowCase = document.createElement("li");
    final_list.appendChild(liForShowCase);
    liForShowCase.appendChild(showCase);
    showCase.addEventListener("click", (e) => {
      i++;
      li.className = "list_element";
      showCase.className = "showCaseHidden";
      final_list.removeChild(liForShowCase);
      final_count.textContent = i;
    });
    final_count.textContent = i;
  });
  final_count.textContent = i;
  //   final_count.textContent = i;- число активных задач
}
