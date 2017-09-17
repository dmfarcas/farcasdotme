import help from './help'
import { randomRedditPicture } from './redditService';
import Output from './Output'

export const output = new Output();


function tokenize(string) {
  const tokenized = string.split(" ");
  return {
    'command': tokenized[0],
    'args': tokenized.slice(1, tokenized.length)
  }
}

export async function getCommand(keyword) {
  const tokenized = tokenize(keyword);
  switch (tokenized.command) {
    case 'give':
    return randomRedditPicture(tokenized.args)
    case 'help':
      return await help();
    case 'clear':
      output.clear()
      return await 'clear';
    case '':
      return await '';
    default:
      return `Unknown command: ${keyword}`
  }
}
