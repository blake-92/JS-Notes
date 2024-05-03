// Submit every

const form1 = document.querySelector("form");

form1.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("#nombre");
  const password = document.querySelector("#password");

  // Prevent new alerts
  const previousAlert = document.querySelector(".alert1");
  previousAlert?.remove();

  // Create a div with the alert
  const alert1 = document.createElement("div");
  alert1.classList.add(
    "alert1",
    "text-white",
    "uppercase",
    "p-2",
    "text-center",
    "font-black",
    "text-sm"
  );

  if (name.value === "" || password.value === "") {
    alert1.textContent = "All fields are required";
    alert1.classList.add("bg-red-500");
  } else {
    alert1.textContent = "Form submitted";
    alert1.classList.add("bg-green-500");
  }
  console.log(name.value);
  console.log(password.value);
  console.log(alert1);

  name.value = "";
  password.value = "";

  form1.appendChild(alert1);

  setTimeout(() => {
    alert1.remove();
  }, 2000);
});
