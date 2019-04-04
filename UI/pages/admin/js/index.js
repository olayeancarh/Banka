// Get DOM Elements
const modal = document.querySelector("#my-modal");
const viewUserBtn = document.querySelector("#viewUsers");
const homeSection = document.querySelector("#home-info");
const createUser = document.querySelector("#createUsers");

// Events
// window.addEventListener('click', outsideClick);
viewUserBtn.addEventListener("click", openUsersTable);
createUser.addEventListener("click", openCreateUser);

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

function openUsersTable(e) {
  homeSection.innerHTML = `
      <h3>Banka Admin Page - Users</h3>
      
      <div class="container">
        <p><strong>Admin Users</strong></p>
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="transBody">
            <tr>
              <td data-column="S/N">1</td>
              <td data-column="First Name">Bello</td>
              <td data-column="Last Name">Abayomi</td>
              <td data-column="Role">Admin I</td>
              <td data-column="Actions"><input type="button" class="btn bg-green" value="View">
                <input type="button" class="btn bg-purple" value="Activate">
                <input type="button" class="btn bg-red" value="Delete"></td>
            </tr>
            <tr>
              <td data-column="S/N">2</td>
              <td data-column="First Name">Lawal</td>
              <td data-column="Last Name">Daniyan</td>
              <td data-column="Role">Admin II</td>
              <td data-column="Actions"><input type="button" class="btn bg-green" value="View">
                <input type="button" class="btn bg-coral" value="Deactivate">
                <input type="button" class="btn bg-red" value="Delete"></td>
            </tr>
          </tbody>
        </table>
        <p><strong>Cashiers</strong></p>
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="transBody">
            <tr>
              <td data-column="S/N">1</td>
              <td data-column="First Name">Seyi</td>
              <td data-column="Last Name">Olofinjana</td>
              <td data-column="Role">Cashier II</td>
              <td data-column="Actions"><input type="button" class="btn bg-green" value="View">
                <input type="button" class="btn bg-purple" value="Activate">
                <input type="button" class="btn bg-red" value="Delete"></td>
            </tr>
            <tr>
              <td data-column="S/N">2</td>
              <td data-column="First Name">Ajayi</td>
              <td data-column="Last Name">Ajimobi</td>
              <td data-column="Role">Cashier III</td>
              <td data-column="Actions"><input type="button" class="btn bg-green" value="View">
                <input type="button" class="btn bg-coral" value="Deactivate">
                <input type="button" class="btn bg-red" value="Delete"></td>
            </tr>
            <tr>
              <td data-column="S/N">3</td>
              <td data-column="First Name">Lookman</td>
              <td data-column="Last Name">Yaya</td>
              <td data-column="Role">Cashier II</td>
              <td data-column="Actions"><input type="button" class="btn bg-green" value="View">
                <input type="button" class="btn bg-coral" value="Deactivate">
                <input type="button" class="btn bg-red" value="Delete"></td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
}

function openCreateUser(e) {
  console.log(e);
  homeSection.innerHTML = `
      <h3>Banka Admin Page - Create a User</h3>
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