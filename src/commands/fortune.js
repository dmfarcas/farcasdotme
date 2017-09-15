export default async function fortune(cb) {
     await fetch('http://www.yerkee.com/api/fortune')
    .then((response) => {
        return response.json();
      })
      .then(async (json) => {
        await json.fortune;
    });
}