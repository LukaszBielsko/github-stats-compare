function fetchRepos(language) {
  return fetch(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  )
    .then(res => res.json())
    .then(data => {
      // console.log(data.items);
      return data.items;
    });
}
// console.log(fetchRepos("ruby"));
export default fetchRepos;
