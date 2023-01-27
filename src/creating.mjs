import setText, { appendText } from "./results.mjs";

export function timeout(){
}

export function interval() {
  let counter = 0;
  const wait = new Promise((resolve) => {
    setInterval(() => {
      console.log("INTERVAL");
      resolve(`Timeout ${++counter}`);
    }, 1500);
  });
  wait.then((text) => setText(text));
}

export function clearIntervalChain() {
    let counter = 0;
    let interval = 0 ;
    const wait = new Promise((resolve) => {
      interval = setInterval(() => {
        console.log("INTERVAL");
        resolve(`Timeout ${++counter}`);
      }, 1500);
    });
    wait.then((text) => {
        clearInterval(interval);
        setText(text);
    });
}

export function xhr() {
    let request = new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", "http://localhost:3000/users/7");
      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(xhr.statusText);
        }
      };
      xhr.send();
    });

    request.then((result) => setText(result));
}

export function allPromises(){
}

export function allSettled(){
}

export function race(){
}