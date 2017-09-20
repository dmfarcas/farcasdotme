export const help = () => {
    return `give <thing> -- returns a picture of a <thing>. Try 'give cats'.
cowsay <thing>. Try 'cowsay hello'.`
}

export const cowSay = (text) => {
  const textStr = text.toString().replace(",", " ");
  const line = "_".repeat(textStr.length);

  return `  ${line}
< ${textStr} >
  ${line}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`
}
