const submitbtn = document.querySelector("#submitbtn");

submitbtn.addEventListener("click", () => {
  console.log("In to Event");
  const passwordField = document.querySelector("#password");
  const cnfmpasswordField = document.querySelector("#cnfmpassword");
  if (passwordField.value != cnfmpasswordField.value) {
    alert("Password did not match!");
  }
});
