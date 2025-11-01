const menuBtn = document.querySelector('.menu-toggle');
const body = document.body;
const overlay = document.querySelector('.overlay');

function openMenu() {
  body.classList.add('is-open');
  menuBtn.textContent = 'Закрити меню';
  menuBtn.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  body.classList.remove('is-open');
  menuBtn.textContent = 'Відкрити меню';
  menuBtn.setAttribute('aria-expanded', 'false');
}

function toggleMenu() {
  if (body.classList.contains('is-open')) {
    closeMenu();
  } else {
    openMenu();
  }
}

menuBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', closeMenu);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();

  if (
    (e.key === 'Enter' || e.key === ' ' || e.key === 'Space') &&
    document.activeElement === menuBtn
  ) {
    e.preventDefault();
    toggleMenu();
  }
});


const openModalBtn = document.querySelector('.open-modal-btn');
const modal = document.querySelector('.modal');
const modalInput = document.querySelector('.task-input');
const saveBtn = document.querySelector('.save-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const errorMsg = document.querySelector('.error');
const taskList = document.querySelector('.task-list');

function openModal() {
  modal.classList.add('is-open');
  body.classList.add('modal-open');
  modalInput.value = '';
  errorMsg.hidden = true;
  setTimeout(() => modalInput.focus(), 50);
}

function closeModal() {
  modal.classList.remove('is-open');
  body.classList.remove('modal-open');
  openModalBtn.focus();
}

openModalBtn.addEventListener('click', openModal);
cancelBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

saveBtn.addEventListener('click', () => {
  const value = modalInput.value.trim();
  if (value) {
    const li = document.createElement('li');
    li.textContent = value;
    taskList.append(li);
    closeModal();
  } else {
    errorMsg.hidden = false;
    errorMsg.textContent = 'Поле не може бути порожнім';
  }
});
