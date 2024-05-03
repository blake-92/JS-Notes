// Fetch API with promises
const url = "https://jsonplaceholder.typicode.com/comments";

fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Error: " + response.status);
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));
