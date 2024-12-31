// Async function will help you to work async function with it will faciliate you with await as well 
// which stop the code execution until the await function compeleted .
async function hello() {
    const response = await new Promise((resolve) => 
      setTimeout(() => {
        console.log("Hello!!!!");
        resolve(); // Resolve the promise after 2 seconds
      }, 2000)
    );
    console.log("World");
  }
  hello();
  