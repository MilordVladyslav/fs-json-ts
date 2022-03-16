import fs = require('fs')

type Callback = (err: any, data: any) => void

function readFile<Contents extends object>(fileName: string): Promise<Contents> {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}

export default readFile
