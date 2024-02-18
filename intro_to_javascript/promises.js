// Asynchronous Programming
// Keywords: promises, async and await

const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation successful");
  }
  reject("Operation failed");
});

myPromise
    .then(result => {
        console.log()
        console.log(result)
    })
    .then(() => {
        console.log("Success!!!")
        console.log()
    })
    .catch(error => {
        console.log()
        console.log(error)
        console.log()
    })
    .finally(() => {
        console.log("End of Program!")
    })

async function AsyncOperation() {
  try {
    let result = await myPromise;

    console.log(result);
    console.log("Success!!!");
  } catch (error) {
    console.log(error);
  } finally {
    console.log("End of program!");
  }
}

AsyncOperation();