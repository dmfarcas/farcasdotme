import help from './help'

export default function getCommand(keyword) {
 switch(keyword) {
    case 'help':
        return help();
        break;
    case '':
        return '';
    default:
        return `Unknown command: ${keyword}`
        break;
 }   
}