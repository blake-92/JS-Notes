// Fetch API with async/await

const url = "https://jsonplaceholder.typicode.com/comments";

const consumeData = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

consumeData();
