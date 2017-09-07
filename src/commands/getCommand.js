import help from './help'
import Output from './Output'

export const output = new Output();

export function getCommand(keyword) {
 switch(keyword) {
    case 'help':
        return help();
    case 'clear':
        output.clear()
        return;
    case '':
        return '';
    default:
        return `Unknown command: ${keyword}`
 }   
}

