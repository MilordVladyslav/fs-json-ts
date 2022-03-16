import numbers from './numbers.json'
import strings from './strings.json'

type NumbersJSON = typeof numbers
type StringsJSON = typeof strings

async function readFileByName(name: 'Numbers'): Promise<NumbersJSON>
async function readFileByName(name: 'Strings'): Promise<NumbersJSON>
async function readFileByName(
  name: 'Numbers' | 'Strings'
): Promise<NumbersJSON | StringsJSON> {
  if (name === 'Numbers') {
    return await import('./numbers.json')
  }
  if (name === 'Strings') {
    return await import('./strings.json')
  }
  throw 'Name not recognized'
}

export default readFileByName
