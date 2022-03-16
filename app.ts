import readFile from './readFile';

type Data = {
  name: string,
  description: string,
  numbers: number[]
}

async function run () {
  const data = await readFile<Data>('./db.json')
  console.log('received data name: ', data.name)
}

run()
