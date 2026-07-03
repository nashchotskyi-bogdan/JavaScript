// 1.
const sessionInput  = document.getElementById('sessionInput');
const saveSessionBtn   = document.getElementById('saveSessionBtn');
const showSessionBtn   = document.getElementById('showSessionBtn');
const clearSessionBtn  = document.getElementById('clearSessionBtn');
const sessionOutput    = document.getElementById('sessionOutput');

saveSessionBtn.addEventListener('click', () => {
    const text = sessionInput.value.trim();
    if (!text) {
        sessionOutput.textContent = 'Введіть текст перед збереженням!';
        sessionOutput.classList.remove('highlight');
        return;
    }
    sessionStorage.setItem('userText', text);
    sessionOutput.textContent = 'Текст збережено у sessionStorage!';
    sessionOutput.classList.add('highlight');
    sessionInput.value = '';
    console.log('Збережено у sessionStorage:', text);
});

showSessionBtn.addEventListener('click', () => {
    const savedText = sessionStorage.getItem('userText');
    if (savedText) {
        sessionOutput.innerHTML = `Збережений текст: <strong>${savedText}</strong>`;
        sessionOutput.classList.add('highlight');
    } else {
        sessionOutput.textContent = 'У sessionStorage немає збережених даних.';
        sessionOutput.classList.remove('highlight');
    }
});
clearSessionBtn.addEventListener('click', () => {
    sessionStorage.removeItem('userText');
    sessionOutput.textContent = 'sessionStorage очищено.';
    sessionOutput.classList.remove('highlight');
    console.log('sessionStorage очищено');
});
// 2.
const bgColorInput      = document.getElementById('bgColor');
const textColorInput     = document.getElementById('textColor');
const fontSizeSelect     = document.getElementById('fontSize');
const fontFamilySelect   = document.getElementById('fontFamily');
const saveSettingsBtn    = document.getElementById('saveSettingsBtn');
const resetSettingsBtn   = document.getElementById('resetSettingsBtn');
const settingsOutput     = document.getElementById('settingsOutput');

function applySettings(settings) {
    document.body.style.backgroundColor = settings.bgColor;
    document.body.style.color           = settings.textColor;
    document.body.style.fontSize        = settings.fontSize;
    document.body.style.fontFamily      = settings.fontFamily;
}
function getCurrentSettings() {
    return {
        bgColor:   bgColorInput.value,
        textColor: textColorInput.value,
        fontSize:  fontSizeSelect.value,
        fontFamily: fontFamilySelect.value
    };
}
saveSettingsBtn.addEventListener('click', () => {
    const settings = getCurrentSettings();
    localStorage.setItem('pageSettings', JSON.stringify(settings));
    applySettings(settings);
    settingsOutput.textContent = 'Налаштування збережено у localStorage!';
    settingsOutput.classList.add('highlight');
    console.log('Налаштування збережено:', settings);
});
resetSettingsBtn.addEventListener('click', () => {
    const defaults = {
        bgColor:   '#1f2937',
        textColor: '#f3f4f6',
        fontSize:  '16px',
        fontFamily: "'Segoe UI', sans-serif"
    };
    localStorage.removeItem('pageSettings');
    applySettings(defaults);
    bgColorInput.value      = defaults.bgColor;
    textColorInput.value     = defaults.textColor;
    fontSizeSelect.value     = defaults.fontSize;
    fontFamilySelect.value   = defaults.fontFamily;
    settingsOutput.textContent = 'Налаштування скинуто до стандартних.';
    settingsOutput.classList.remove('highlight');
});
(function loadSettings() {
    const saved = localStorage.getItem('pageSettings');
    if (saved) {
        const settings = JSON.parse(saved);
        applySettings(settings);
        bgColorInput.value      = settings.bgColor;
        textColorInput.value     = settings.textColor;
        fontSizeSelect.value     = settings.fontSize;
        fontFamilySelect.value   = settings.fontFamily;
        console.log('Налаштування завантажено з localStorage:', settings);
    }
})();
// 3.
const todoInput  = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoListEl = document.getElementById('todoList');
const todoStats  = document.getElementById('todoStats');

let todos = JSON.parse(localStorage.getItem('todos')) || [];
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}
function renderTodos() {
    todoListEl.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = `todo-item${todo.completed ? ' completed' : ''}`;
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'todo-checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => toggleTodo(index));
        const span = document.createElement('span');
        span.className = 'todo-text';
        span.textContent = todo.text;
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'todo-delete';
        deleteBtn.textContent = '✕';
        deleteBtn.addEventListener('click', () => deleteTodo(index));
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoListEl.appendChild(li);
    });
    updateStats();
}
function addTodo() {
    const text = todoInput.value.trim();
    if (!text) return;
    todos.push({ text, completed: false });
    saveTodos();
    renderTodos();
    todoInput.value = '';
    todoInput.focus();
    console.log('Додано завдання:', text);
}

function deleteTodo(index) {
    const removed = todos.splice(index, 1);
    saveTodos();
    renderTodos();
    console.log('🗑️ Видалено завдання:', removed[0].text);
}

function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    saveTodos();
    renderTodos();
}

function updateStats() {
    const total     = todos.length;
    const completed = todos.filter(t => t.completed).length;
    const remaining = total - completed;
    todoStats.textContent = total
        ? `Всього: ${total} | Виконано: ${completed} | Залишилось: ${remaining}`
        : '';
}
addTodoBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTodo();
});
renderTodos();
// 4.
const generateJsonBtn = document.getElementById('generateJsonBtn');
const jsonPreview     = document.getElementById('jsonPreview');
const userData = {
    name: "Богдан",
    age: 18,
    isStudent: true,
    scores: [95, 87, 92, 78, 100],
    address: {
        city: "Володимир",
        street: "Мальчевського",
        zipCode: "47101"
    },
    hobbies: ["програмування", "музика", "спорт"],
    graduationYear: null,
    skills: {
        frontend: ["HTML", "CSS", "JavaScript", "React"],
        backend: ["Node.js", "Python"],
        databases: ["MongoDB", "PostgreSQL"]
    },
    createdAt: new Date().toISOString()
};
const jsonString = JSON.stringify(userData, null, 4);
jsonPreview.textContent = jsonString;
generateJsonBtn.addEventListener('click', () => {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'data.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    console.log('JSON-файл завантажено!');
    console.log('Об\'єкт:', userData);
    console.log('JSON:', jsonString);
});