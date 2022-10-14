import { Repo } from '../types'

type RepoElemProps = {
  repo: Repo
  marked: boolean
  toggleMarkedRepo: (repo: Repo) => void
}

function RepoElem({ repo, marked, toggleMarkedRepo }: RepoElemProps): JSX.Element {
  const { name, stargazers_count, watchers_count, language, html_url, description } = repo
  return <tr data-testid="repo-elem">
    <td>
      <input type='checkbox' checked={marked} onChange={() => toggleMarkedRepo(repo)} data-testid="repo-elem-checkbox" />
    </td>
    <td>
      <a href={html_url} >{name}</a>
    </td>
    <td>
      {description}
    </td>
    <td>
      {stargazers_count}
    </td>
    <td>
      {watchers_count}
    </td>
    <td>
      {language}
    </td>
  </tr>
}
export default RepoElem;