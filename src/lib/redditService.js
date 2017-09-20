const getSubredditData = async (subreddit) => await (await fetch(`https://www.reddit.com/r/${subreddit}/.json`)).json()

export const randomRedditPicture = async (subreddit) => {
  const sub = await getSubredditData(subreddit);

  // console.log(sub)
  // if (sub.error) return null

  const listOfPictures = sub.data.children
    .filter(e => !e.data.url.includes('imgur') && !e.data.url.startsWith('https://www.reddit.com') && e.data.url.includes('jpg'))
    .map(e => e.data.url);

  const randomNumber = Math.floor((Math.random() * listOfPictures.length) + 1);
  const picture = listOfPictures[randomNumber];

  return picture
}
