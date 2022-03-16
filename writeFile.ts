import fs = require('fs')

function writeFile<Contents extends object>(fileName: string, data: Contents): Promise<Contents> {
  return new Promise((resolve, reject) => {
    const formattedData = JSON.stringify(data, null, 2);
    fs.writeFile(fileName, formattedData, (err) => {
      if(err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}
export default writeFile