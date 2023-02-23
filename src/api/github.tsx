const GITHUB_URL = 'https://api.github.com'
const GITHUB_USERNAME = 'Tech-S1'

type GithubUserRepoData = {
  name: string
  description: string
  html_url: string
  language: string | null
}

const getUserRepos = () =>
  fetch(`${GITHUB_URL}/users/${GITHUB_USERNAME}/repos`)
    .then(response => {
      if (!response.ok) {
        throw new Error('HTTP status for Github user repos' + response.status)
      }
      return response.json()
    })
    .catch(error => {
      throw new Error('Cant get Github user repos: ' + error)
    })

export { getUserRepos }
export type { GithubUserRepoData }
