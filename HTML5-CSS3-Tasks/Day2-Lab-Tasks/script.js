//  Selectors
const dialog = document.getElementById("dialog");
const setupForm = document.getElementById("form");
const teamInput = document.getElementById("team-input");
const inputError = document.getElementById("input-error");
const board = document.getElementById("board");
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskError = document.getElementById("task-error");
const task = document.getElementById("task");
const membersContainer = document.getElementById("members-container");
const taskCount = document.getElementById("task-count");

//?  Open Dialog On Page Load
window.addEventListener("load", () => {
  dialog.showModal();
}); //* DONE

//?  Modal Validation
setupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const teamName = teamInput.value.trim();

  if (teamName === "") {
    inputError.textContent = "Please enter at least one name.";
    return;
  }

  const names = teamName
    .split(",")
    .map((n) => n.trim())
    .filter((n) => n !== "");

  if (names.length === 0) {
    inputError.textContent = "No names found.";
    return;
  }

  const shortName = names.find((n) => n.length < 2);
  if (shortName) {
    inputError.textContent = `"${shortName}" is too short. Min 2 characters.`;
    return;
  }

  const lower = names.map((n) => n.toLowerCase());
  if (lower.some((n, i) => lower.indexOf(n) !== i)) {
    inputError.textContent = "Duplicate names found.";
    return;
  }

  inputError.textContent = "";
  dialog.close();
  buildBoard(names);
}); //* DONE

//?  Build Board
function buildBoard(names) {
  board.classList.remove("hidden");
  names.forEach((name) => {
    membersContainer.appendChild(createMemberCard(name));
  });
} //* DONE

//?  Create Member Card
function createMemberCard(name) {
  const article = document.createElement("article");
  article.classList.add("member-card");
  article.dataset.member = name;

  article.innerHTML = `
    <div class="card-header">
      <span>&#128100; ${name}</span>
      <span class="badge blue-badge member-badge">0</span>
    </div>
    <span class="no-tasks-msg">No tasks assigned</span>
  `;

  article.addEventListener("dragover", (e) => {
    e.preventDefault();
    article.classList.add("drag-over");
  });

  article.addEventListener("dragleave", () => {
    article.classList.remove("drag-over");
  });

  article.addEventListener("drop", (e) => {
    e.preventDefault();
    article.classList.remove("drag-over");

    const taskId = e.dataTransfer.getData("taskId");
    const taskCard = document.getElementById(taskId);

    if (taskCard) {
      //! Remove From Task And Update Task Badge
      taskCard.parentElement.removeChild(taskCard);
      updateTaskCount();

      //! Hide "No Tasks Assigned" Once A Task Is Added
      const msg = article.querySelector(".no-tasks-msg");
      if (msg) msg.style.display = "none";

      article.appendChild(createMemberTask(taskCard.dataset.taskName));
      updateMemberBadge(article);
    }
  });

  return article;
} //* DONE

//?  Create Member Task
function createMemberTask(taskName) {
  const div = document.createElement("div");
  div.classList.add("member-task", "status-todo");

  div.innerHTML = `
    <p>${taskName}</p>
    <button class="status-btn" data-status="todo">To Do</button>
    <button class="status-btn" data-status="ongoing">Ongoing</button>
    <button class="status-btn" data-status="finished">Finished</button>
  `;

  div.querySelectorAll(".status-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      div.classList.remove("status-todo", "status-ongoing", "status-finished");
      div.classList.add("status-" + btn.dataset.status);
    });
  });

  return div;
} //* DONE

//?  Update Member Badge
function updateMemberBadge(memberCard) {
  const count = memberCard.querySelectorAll(".member-task").length;
  memberCard.querySelector(".member-badge").textContent = count;
} //* DONE

//?  Update Task Badge
function updateTaskCount() {
  taskCount.textContent = task.querySelectorAll(".task-card").length;
} //* DONE

//?  Add Task
let taskIdCounter = 0;

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = taskInput.value.trim();

  if (name === "") {
    taskError.textContent = "Task name cannot be empty.";
    return;
  }
  if (name.length < 2) {
    taskError.textContent = "Min 2 characters.";
    return;
  }

  taskError.textContent = "";

  const taskCard = document.createElement("div");
  taskCard.classList.add("task-card");
  taskCard.id = "task-" + taskIdCounter++;
  taskCard.dataset.taskName = name;
  taskCard.draggable = true;
  taskCard.innerHTML = `${name} <button class="delete-btn" title="Delete">&#10005;</button>`;

  //! Delete Button
  taskCard.querySelector(".delete-btn").addEventListener("click", () => {
    taskCard.remove();
    updateTaskCount();
  }); //* DONE

  //? Drag
  taskCard.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("taskId", taskCard.id);
  }); //* DONE

  task.appendChild(taskCard);
  taskInput.value = "";
  updateTaskCount();
}); //* DONE
