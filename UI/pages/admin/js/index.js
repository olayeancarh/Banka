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
