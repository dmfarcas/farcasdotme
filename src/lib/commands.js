// TODO: mail sender, weather, imdb movies
import React from 'react';

const help = () => {
  return `give <thing> -- returns a picture of a <thing>. Try 'give cats'.
cowsay <thing>. Try 'cowsay hello'
ls -- does nothing
mail -- displays email address
repos -- a list of my github repos
reverse <string> -- reverses a string
no -- no
gif <thing> --returns a gif of a <thing>. Try 'gif cat'`;
};

const cowSay = text => {
  const textStr = text.toString().replace(',', ' ');
  const line = '_'.repeat(textStr.length);

  return `  ${line}
< ${textStr} >
  ${line}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`;
};

const ls = () => {
  return `Nothing to list here...`;
};

const repos = async () => {
  const apiUrl = `https://api.github.com/users/dmfarcas/repos`;
  const repoList = await (await fetch(apiUrl)).json();

  return repoList.map(({ name, html_url }) => (
    <a href={html_url} target="_blank">
      {name}
    </a>
  ));
};

const mail = () => {
  return `Say hi at dan@farcas.me!`;
};

const no = () => `Nope.`;

const randomRedditPicture = async subreddit => {
  const apiUrl = `https://www.reddit.com/r/${subreddit}/.json`;
  const getSubredditData = async subreddit =>
    await (await fetch(apiUrl)).json();
  const sub = await getSubredditData(subreddit);

  if (!sub.data) return;

  const listOfPictures = sub.data.children
    .filter(
      e =>
        !e.data.url.includes('imgur') &&
        !e.data.url.startsWith('https://www.reddit.com') &&
        e.data.url.includes('jpg')
    )
    .map(e => e.data.url);

  const randomNumber = Math.floor(Math.random() * listOfPictures.length + 1);
  const picture = listOfPictures[randomNumber];

  return picture;
};

const giphyService = async tag => {
  const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${
    process.env.REACT_APP_GIPHY_KEY
  }`;
  const gif = await (await fetch(`${apiUrl}&tag=${tag}&rating=G`)).json();

  return gif.data.image_url;
};

const reverse = string =>
  string.reverse().map(token =>
    token
      .split('')
      .reverse()
      .join('')
  );

export {
  help,
  cowSay,
  no,
  ls,
  mail,
  randomRedditPicture,
  giphyService,
  repos,
  reverse
};
