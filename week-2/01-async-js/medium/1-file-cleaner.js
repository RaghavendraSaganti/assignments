// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

// callback based approach
import fs from "fs";
function cleanFile(cb) {
  fs.readFile("file-cleaner-text.txt", "utf-8", (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      const cleanData = data
        .split(" ")
        .filter((str) => str !== "")
        .join(" ");
      cb(null, cleanData);
    }
  });
}

cleanFile((err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

//promise approach
function cleanFilePromise() {
  return new Promise((res, rej) => {
    fs.readFile("file-cleaner-text.txt", "utf-8", (err, data) => {
      if (err) {
        rej(err);
      } else {
        const cleanData = data
          .split(" ")
          .filter((str) => str !== "")
          .join(" ");
        res(cleanData);
      }
    });
  });
}

cleanFilePromise()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

//async/await approach
async function cleanFileasync() {
  const data = await fs.promises.readFile("file-cleaner-text.txt", "utf-8");
  return data
    .split(" ")
    .filter((str) => str !== "")
    .join(" ");
}
try {
  console.log(await cleanFileasync());
} catch (err) {
  console.error(err);
}
