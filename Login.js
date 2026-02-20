// SHOW / HIDE PASSWORD
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", function () {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);

    // Ganti icon (opsional)
    this.textContent = type === "password" ? "👁️" : "🙈";
});

// LOGIN VALIDATION
function login() {
    const userId = document.getElementById("userId").value;
    const password = passwordInput.value;

    if (userId === "" || password === "") {
        alert("ID dan Password tidak boleh kosong!");
        return;
    }

    // Contoh login sederhana (dummy)
    if (userId === "admin" && password === "12345") {
        alert("Login berhasil!");
        // window.location.href = "dashboard.html";
    } else {
        alert("ID atau Password salah!");
    }
}