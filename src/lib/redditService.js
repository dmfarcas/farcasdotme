const getSubredditData = async (subreddit) => await (await fetch(`https://www.reddit.com/r/${subreddit}/.json`)).json()

export const randomRedditPicture = async(subreddit) => {
  const data = await getSubredditData(subreddit);
  const listOfPictures = data.data.children.map(e => e.data.url);
  const randomNumber = Math.floor((Math.random() * listOfPictures.length) + 1);
  const picture = listOfPictures[randomNumber];

  return picture
}


// export randomRedditPicture
