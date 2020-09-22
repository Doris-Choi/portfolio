const closeModal = () => {
  const modalBox = document.querySelector('.modal-box');
  modalBox.classList.add('fadeOut');

  // 모달창 지우기
  const modal = document.querySelector('.modal');
  setTimeout(() => {
    document.body.firstElementChild.removeChild(modal);
  }, 200);
};

const makeModal = () => {
  // default Form
  const modal = document.createElement('div');
  const modalBg = document.createElement('div');
  const modalBox = document.createElement('div');
  const button = document.createElement('button');
  const icon = document.createElement('i');
  const content = document.createElement('div');
  modal.classList.add('modal');
  modalBg.classList.add('modal-bg');
  modalBox.classList.add('modal-box');
  button.classList.add('modal-close');
  icon.classList.add('fas', 'fa-times');
  content.classList.add('modal-content');
  modalBg.addEventListener('click', closeModal);
  button.addEventListener('click', closeModal);
  button.appendChild(icon);
  modalBox.appendChild(button);
  modalBox.appendChild(content);
  modal.appendChild(modalBg);
  modal.appendChild(modalBox);
  document.body.firstElementChild.appendChild(modal);
};

const openModal = (e) => {
  makeModal();
};

export default openModal;
