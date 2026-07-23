document.addEventListener("DOMContentLoaded", () => {
    const signupBtn = document.getElementById("signupBtn");
    const loginBtn = document.getElementById("loginBtn");

    if (signupBtn) {
        signupBtn.addEventListener("click", () => {
            alert("Signup button clicked!");
        });
    }

    if (loginBtn) {
        loginBtn.addEventListener("click", () => {
            alert("Login button clicked!");
        });
    }
});
