const passwordInput = document.getElementById("password-input")
const iconEye = document.getElementById("icon-eye")

iconEye.addEventListener("click", () => {
  if (passwordInput.type === "text") {
    passwordInput.type = "password"
    iconEye.classList.add("ph-eye")
    iconEye.classList.remove("ph-eye-slash")
  } else {
    passwordInput.type = "text"
    iconEye.classList.add("ph-eye-slash")
    iconEye.classList.remove("ph-eye")
  }
})
