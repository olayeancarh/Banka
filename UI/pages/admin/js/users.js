// Get DOM Elements
const createUser = document.querySelector('#createUser');
const modal = document.querySelector('#my-modal');
const transBtn = document.querySelector('#transBody');

// Events
createUser.addEventListener('click', () => openModal('Create User', 'modal-lg'));
window.addEventListener('click', outsideClick);
transBtn.addEventListener('click', openTransModal); 

// Open
function openModal(header, modalSize) {
  document.querySelector('.modal-body').innerHTML = '';
  modal.style.display = 'block';
  document.getElementById('modalHeader').innerHTML = header;
  document.getElementById('modCont').classList.add(modalSize);
  if(header) {
    document.querySelector('.modal-body').innerHTML = `
      <div class="container">
        <form action="">
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input type="text" id="firstname" name="firstname">
          </div>
          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" value="" name="lastName">
          </div>
          <div class="form-group">
            <label for="userRole">User Role</label>
            <select id="userRole" value="" name="userRole">
              <option>Admin I</option>
              <option>Admin II</option>
              <option>Admin III</option>
              <option>Cashier I</option>
              <option>Cashier II</option>
              <option>Cashier III</option>
            </select>
          </div>
          <div class="form-group">
            <label for="userComment">Comments</label>
            <input type="text" id="comments" name="userComment">
          </div>
          <button type="submit" class="btn login">Login</button>
        </form>
      </div>
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

function openTransModal(e) {
  const tableRow = [[e.target.parentElement.parentElement][0].children];
  const tableRow1 = [tableRow][0][0];
  switch (e.target.value) {
    case 'View':
      document.querySelector('.modal-body').innerHTML = '';
      modal.style.display = 'block';
      document.getElementById('modalHeader').innerHTML = 'View User';
      document.getElementById('modCont').classList.add('modal-sm');

      if(tableRow1) {
        document.querySelector('.modal-body').innerHTML = `
          <p>First Name: <strong>${tableRow1[1].innerText}</strong></p>
          <p>Last Name: <strong>${tableRow1[2].innerText}</strong></p>
          <p>Role: <strong>${tableRow1[3].innerText}</strong></p>
        `;
      }
      break;
    case 'Activate':
      e.target.value = 'Deactivate';
      e.target.classList.add('bg-coral');
      e.target.classList.remove('bg-purple');
      break;
    case 'Deactivate':
      e.target.value = 'Activate';
      e.target.classList.add('bg-purple');
      e.target.classList.remove('bg-coral');
      break;
    case 'Delete':
      e.target.parentElement.parentElement.remove();
      break;
    default:
      break;
  }
  // document.querySelector('.modal-body').innerHTML = '';
  // modal.style.display = 'block';
  // document.getElementById('modalHeader').innerHTML = 'Account Transaction Details';
  // document.getElementById('modCont').classList.add('modal-sm');

  // if(tableRow1) {
  //   document.querySelector('.modal-body').innerHTML = `
  //     <p>Transaction Date: <strong>${tableRow1[0].innerText}</strong></p>
  //     <p>Originationg Branch: <strong>${tableRow1[1].innerText}</strong></p>
  //     <p>Debits: <strong>${tableRow1[2].innerText}</strong></p>
  //     <p>Credits: <strong>${tableRow1[3].innerText}</strong></p>
  //     <p>Balance: <strong>${tableRow1[4].innerText}</strong></p>
  //   `;
  // }
}
