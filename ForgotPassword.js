function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    input.type = input.type === "password" ? "text" : "password";
}

function changePassword() {
    const userId = document.getElementById("userId").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (userId === "" || newPassword === "" || confirmPassword === "") {
        alert("Please fill in all fields!");
        return;
    }

    if (newPassword !== confirmPassword) {
        alert("Password does not match!");
        return;
    }

    alert("Password successfully changed!");
    
    // simulasi redirect ke login
    window.location.href = "../Login/Login.html";
}