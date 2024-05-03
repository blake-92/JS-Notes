// Click events

const heading = document.querySelector(".heading");

heading.addEventListener("click", () => {
  heading.textContent = "You clicked me!";
  console.log("You clicked me");
});

// heading.addEventListener("dblclick", () => {
//   heading.textContent = "You double clicked me!";
//   console.log("You double clicked me");
// });

// heading.addEventListener("mouseenter", () => {
//   heading.textContent = "Mouse entered!";
//   console.log("Mouse entered");
// });

// heading.addEventListener("mouseleave", () => {
//   heading.textContent = "Mouse leave!";
//   console.log("Mouse leave");
// });

const links = document.querySelectorAll(".navegacion a");

// preventDefault stops the default action of the element (in this case, redirecting to another page o reloading the page)
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target.textContent);
  });
});
