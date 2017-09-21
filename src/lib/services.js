import ghPinnedRepos from 'gh-pinned-repos';
import React from 'react'

export const randomRedditPicture = async (subreddit) => {
  const apiUrl = `https://www.reddit.com/r/${subreddit}/.json`;
  const getSubredditData = async (subreddit) => await (await fetch(apiUrl)).json()
  const sub = await getSubredditData(subreddit);

  const listOfPictures = sub.data.children
    .filter(e => !e.data.url.includes('imgur') && !e.data.url.startsWith('https://www.reddit.com') && e.data.url.includes('jpg'))
    .map(e => e.data.url);

  const randomNumber = Math.floor((Math.random() * listOfPictures.length) + 1);
  const picture = listOfPictures[randomNumber];

  return picture
}

export const giphyService = async (tag) => {
  const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_GIPHY_KEY}`;
  const gif = await(await fetch(`${apiUrl}&tag=${tag}&rating=G`)).json();

  return gif.data.image_url;
}


export const pinnedRepos = async (user) => {
  const repos = await ghPinnedRepos(user);

  return repos.map((repo,i) => {
    const url = `https://github.com/${repo}`
    return <div className="git-links" key={i}><a rel="noopener noreferrer" href={url} target="_blank">{repo}</a></div>
  })
}
