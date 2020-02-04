import { clientID, clientSecret } from "../secrets";

function getProfile(username) {
  return fetch(
    `https://api.github.com/users/${username}?client_id=${clientID}&client_secret=${clientSecret}`
  )
    .then(res => res.json())
    .then(profile => {
      console.log(profile.followers);
      return profile;
    });
}

function getRepos(username) {
  return fetch(
    `https://api.github.com/users/${username}/repos?client_id=${clientID}&client_secret=${clientSecret}&per_page=100`
  )
    .then(res => res.json())
    .then(repos => {
      return repos;
    });
}

function calcScore(followers, repos) {
  const stars = repos.reduce((acc, cur) => {
    return acc + cur.stargazers_count;
  }, 0);
  return followers * 2 + stars;
}

export function getUserData(username) {
  console.log("user data username", username);
  return Promise.all([getProfile(username), getRepos(username)]).then(
    ([profile, repos]) => {
      return {
        profile,
        score: calcScore(profile.followers, repos)
      };
    }
  );
}

export function battle(players) {
  return Promise.all([getUserData(players[0]), getUserData(players[1])]).then(
    ([playerOne, playerTwo]) => ({
      playerOne,
      playerTwo
    })
  );
}

export function fetchRepos(language) {
  return fetch(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  )
    .then(res => res.json())
    .then(data => {
      return data.items;
    });
}
// console.log(fetchRepos("ruby"));
