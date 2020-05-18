const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");

console.log("test file");
if (isMainThread) {
  console.log("I am a Main Thread");

  const worker = new Worker(__filename, { workerData: 1 });
  worker.on("message", (message) => console.log(message));
} else {
  const someMath = workerData + 1;
  parentPort.postMessage(someMath);
}
