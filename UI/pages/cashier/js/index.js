// Get DOM Elements
const modal = document.querySelector('#my-modal');
const transBtn = document.querySelector('#transBody');

// Events
window.addEventListener('click', outsideClick);
transBtn.addEventListener('click', openCreditDebit);

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

function openCreditDebit(e) {
  const tableRow = [[e.target.parentElement.parentElement][0].children];
  const tableRow1 = [tableRow][0][0];
  let debitCreditString;

  document.querySelector('.modal-body').innerHTML = '';
  modal.style.display = 'block';
  document.getElementById('modalHeader').innerHTML = `${e.target.value}`;
  document.getElementById('modCont').classList.add('modal-sm');

  if(e.target.value == 'Debit'){
    debitCreditString = 'Debit Amount';
  } else {
    debitCreditString = 'Credit Amount';
  }
  
  if(tableRow1) {
    document.querySelector('.modal-body').innerHTML = `
      <form action="">
        <div class="form-group">
          <label for="customerName">Customer Name</label>
          <input type="text" id="customername" value="${tableRow1[1].innerText}" name="customerName" disabled>
        </div>
        <div class="form-group">
          <label for="accountNumber">Account Number</label>
          <input type="text" id="accountNumber" value="${tableRow1[2].innerText}" name="accountNumber" disabled>
        </div>
        <div class="form-group">
          <label for="accountbalance">Account Balance</label>
          <input type="text" id="accountbalance" value="${tableRow1[3].innerText}" name="accountbalance" disabled>
        </div>
        <div class="form-group">
          <label for="debitCredit">${debitCreditString}</label>
          <input type="text" id="debitCredit" name="debitCredit">
        </div>
        <button type="submit" class="btn login">Login</button>
      </form>
    `;
  }
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}