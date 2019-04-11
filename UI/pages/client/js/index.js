// Get DOM Elements
const createAccount = document.querySelector("#createAccount");
const modal = document.querySelector("#my-modal");
const transBtn = document.querySelector("#transBody");

// Events
createAccount.addEventListener("click", () =>
  openModal("Create Account", "modal-sm")
);
window.addEventListener("click", outsideClick);
transBtn.addEventListener("click", openTransModal);

// Open
function openModal(header, modalSize) {
  document.querySelector(".modal-body").innerHTML = "";
  modal.style.display = "block";
  document.getElementById("modalHeader").innerHTML = header;
  document.getElementById("modCont").classList.add(modalSize);
  if (header) {
    document.querySelector(".modal-body").innerHTML = `
    <form action="">
      <div class="form-group">
        <label for="accounType">Account Type</label>
        <select>
          <option>Single Account</option>
          <option>Savings Account</option>
          <option>Current Account</option>
        </select>
      </div>
      <div class="form-group">
        <label for="bvn">BVN</label>
        <input type="text" id="bvn" name="Bvn">
      </div>
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
      
      <button type="submit" class="btn signup">Create Account</button>
    </form>`;
  }
}

// Close
function closeModal() {
  modal.style.display = "none";
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

function logOrSignOut(e) {
  if (e.target.classList.contains("login")) {
    const username = document.querySelector("#username").value,
      password = document.querySelector("#password").value;
    if (username) {
      switch (username) {
        case "admin":
          password
            ? (location.href = "./pages/admin")
            : alert("please input password");
          break;
        case "client":
          password
            ? (location.href = "./pages/client")
            : alert("please input password");
          break;
        case "cashier":
          password
            ? (location.href = "./pages/cashier")
            : alert("please input password");
          break;

        default:
          break;
      }
    } else {
      alert("Please ensure to fill both username and password");
    }
  }
  e.preventDefault();
}

function openTransModal(e) {
  const tableRow = [[e.target.parentElement.parentElement][0].children];
  const tableRow1 = [tableRow][0][0];

  document.querySelector(".modal-body").innerHTML = "";
  modal.style.display = "block";
  document.getElementById("modalHeader").innerHTML =
    "Account Transaction Details";
  document.getElementById("modCont").classList.add("modal-sm");

  if (tableRow1) {
    document.querySelector(".modal-body").innerHTML = `
      <p>Transaction Date: <strong>${tableRow1[0].innerText}</strong></p>
      <p>Originationg Branch: <strong>${tableRow1[1].innerText}</strong></p>
      <p>Debits: <strong>${tableRow1[2].innerText}</strong></p>
      <p>Credits: <strong>${tableRow1[3].innerText}</strong></p>
      <p>Balance: <strong>${tableRow1[4].innerText}</strong></p>
    `;
  }
}
