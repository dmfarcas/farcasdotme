export const help = () => {
    return `give <thing> -- returns a picture of a <thing>. Try 'give cats'.
cowsay <thing>. Try 'cowsay hello'.
ls -- does nothing.
mail -- displays email address
TODO: mail sender, weather, github project list, imdb movies`
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

export const ls = () => {
    return `Nothing to list here...`
}


export const mail = () => {
    return `Say hi at dan@farcas.me!`
}
