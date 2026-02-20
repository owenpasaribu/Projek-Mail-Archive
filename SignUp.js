// TOGGLE PASSWORD
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", function () {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
    this.textContent = type === "password" ? "👁️" : "🙈";
});

// SIGN UP VALIDATION
function signup() {
    const username = document.getElementById("username").value;
    const userId = document.getElementById("userId").value;
    const password = passwordInput.value;

    if (username === "" || userId === "" || password === "") {
        alert("Semua field wajib diisi!");
        return;
    }

    alert("Sign up berhasil!\nSilakan login.");
    window.location.href = "Login.html";
}