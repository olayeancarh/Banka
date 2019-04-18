/* eslint-disable no-undef */
// Get DOM Elements
const modal = document.querySelector('#my-modal');
const closeBtn = document.querySelector('.close');
const signInBtn = document.querySelector('#sign-in');
const signUpBtn = document.querySelector('#sign-up');
const adminSignUpBtn = document.querySelector('#admin-sign-up');

// Events
closeBtn.addEventListener('click', closeModal);
signInBtn.addEventListener('click', () => openModal('Login', 'modal-sm'));
signUpBtn.addEventListener('click', () => openModal('Register', 'modal-sm'));
adminSignUpBtn.addEventListener('click', () => openModal('Admin Sign-Up', 'modal-sm'));
modal.addEventListener('click', logOrSignOut);
window.addEventListener('click', outsideClick);


// Open
function openModal(header, modalSize) {
  document.querySelector('.modal-body').innerHTML = '';
  modal.style.display = 'block';
  document.getElementById('modalHeader').innerHTML = header;
  document.getElementById('modCont').classList.add(modalSize);
  if (header == 'Login') {
    document.querySelector('.modal-body').innerHTML = `
      <form action="">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" name="userName">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="passWord">
        </div>
        <button type="submit" class="btn login">Login</button>
      </form>
    `;
  } else {
    document.querySelector('.modal-body').innerHTML = `
    <form action="">
      <div class="form-group">
        <label for="firstname">First Name</label>
        <input type="text" id="firstname" name="firstName">
      </div>
      <div class="form-group">
        <label for="lastname">Last Name</label>
        <input type="text" id="lastname" name="lastName">
      </div>
      <div class="form-group">
        <label for="phonenumber">Phone Number</label>
        <input type="text" id="phonenumber" name="phoneNumber">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" id="email" name="Email">
      </div>
      <div class="form-group">
        <label for="password1">Password</label>
        <input type="password" id="password1" name="passWord1">
      </div>
      <div class="form-group">
        <label for="password2">Confirm Password</label>
        <input type="password" id="password2" name="passWord2">
      </div>
      
      <button type="submit" class="btn signup">Sign Up</button>
    </form>
  `;
  }
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

function logOrSignOut(e) {
  if(e.target.classList.contains('login')){
    const username = document.querySelector('#username').value,
          password = document.querySelector('#password').value;
    if(username) {
      switch (username) {
        case 'admin':
          password ? location.href = './pages/admin' : alert('please input password');
          break;
        case 'client':
          password ? location.href = './pages/client' : alert('please input password');
          break;
        case 'cashier':
          password ? location.href = './pages/cashier' : alert('please input password');
          break;
      
        default:
          break;
      }
    } else {
      alert('Please ensure to fill both username and password');
    }
  }
  e.preventDefault();
}