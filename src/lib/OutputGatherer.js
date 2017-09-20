import help from './help'
import {randomRedditPicture} from './redditService';

function tokenize(string) { // TODO create sanitize
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
      return {
        type: 'picture',
        output: randomRedditPicture(tokenized.args)
      }
    case 'help':
      return {
        type: 'text',
        output: help()
      };
    case '':
      return {
        type: 'text',
        output: ''
      };
    default:
      return {
        type: 'text',
        output: `Unknown command: ${keyword}`
      }
  }
}
