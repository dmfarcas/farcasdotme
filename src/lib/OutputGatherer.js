import { help, cowSay, ls, mail, randomRedditPicture, giphyService } from './commands'

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
      case 'ls':
        return {
          type: 'text',
          output: ls()
        };
      case 'mail':
        return {
          type: 'text',
          output: mail()
        };
      case 'cowsay':
        return {
          type: 'text',
          output: cowSay(tokenized.args)
        };
      case 'gif':
        return {
          type: 'picture',
          output: giphyService(tokenized.args)
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
