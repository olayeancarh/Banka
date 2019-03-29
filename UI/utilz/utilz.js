// Get DOM Elements
const signOut = document.querySelector('#logout');
const closeBtn = document.querySelector('.close');

// Events
signOut.addEventListener('click', logout);
closeBtn.addEventListener('click', closeModal);

function logout () {
  location.href = '../../';
}

// Close Modal
function closeModal() {
  modal.style.display = 'none';
}

// Close Modal If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

