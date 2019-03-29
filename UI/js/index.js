// Get DOM Elements
const modal = document.querySelector('#my-modal');
const closeBtn = document.querySelector('.close');
const signInBtn = document.querySelector('#sign-in');
const signUpBtn = document.querySelector('#sign-up');

// Events
closeBtn.addEventListener('click', closeModal);
signInBtn.addEventListener('click', () => openModal('Login', 'modal-sm'));
signUpBtn.addEventListener('click', () => openModal('Register', 'modal-sm'));
window.addEventListener('click', outsideClick);

// Open
function openModal(header, modalSize) {
  document.querySelector('.modal-body').innerHTML = '';
  modal.style.display = 'block';
  document.getElementById('modalHeader').innerHTML = header;
  document.getElementById('modCont').classList.add(modalSize);
  if(header == 'Login') {
    document.querySelector('.modal-body').innerHTML = `
      <form action="">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" name="userName">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="text" id="password" name="passWord">
        </div>
        <button type="submit" class="btn">Login</button>
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
        <input type="password1" id="password1" name="passWord1">
      </div>
      <div class="form-group">
        <label for="password2">Confirm Password</label>
        <input type="password2" id="password2" name="passWord2">
      </div>
      
      <button type="submit" class="btn">Sign Up</button>
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