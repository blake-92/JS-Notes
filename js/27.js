// Performance and multiple async await

const url1 = "https://jsonplaceholder.typicode.com/comments";
const url2 = "https://jsonplaceholder.typicode.com/todos";
const url3 = "https://jsonplaceholder.typicode.com/photos";

// Sequentially fetching data
const consumeData1 = async () => {
  try {
    const start = performance.now();

    const response1 = await fetch(url1);
    const data1 = await response1.json();
    console.log(data1);

    const response2 = await fetch(url2);
    const data2 = await response2.json();
    console.log(data2);

    const response3 = await fetch(url3);
    const data3 = await response3.json();
    console.log(data3);

    const end = performance.now();
    console.log(`Time_1 taken: ${end - start}ms`);
  } catch (error) {
    console.log(error.message);
  }
};
consumeData1();

// Parallel fetching data
const consumeData2 = async () => {
  try {
    const start = performance.now();

    const [response1, response2, response3] = await Promise.all([
      fetch(url1),
      fetch(url2),
      fetch(url3),
    ]);

    const [data1, data2, data3] = await Promise.all([
      response1.json(),
      response2.json(),
      response3.json(),
    ]);

    console.log(data1);
    console.log(data2);
    console.log(data3);

    const end = performance.now();
    console.log(`Time_2 taken: ${end - start}ms`);
  } catch (error) {
    console.log(error.message);
  }
};
consumeData2();
