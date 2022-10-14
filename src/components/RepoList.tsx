import { Repo } from '../types'
import RepoElem from './RepoElem'

type RepoListProps = {
  repos: Repo[]
  changePage: (pageNumber: number) => void
  currentPage: number
  pageCount: number
  markedRepos: Repo[]
  toggleMarkedRepo: (repo: Repo) => void
}

function RepoList({ repos, changePage, currentPage, pageCount, markedRepos, toggleMarkedRepo }: RepoListProps): JSX.Element {
  return <><table className='blueTable'>
    <thead>
      <tr>
        <th>
          Marked
        </th>
        <th>
          Name
        </th>
        <th>
          Description
        </th>
        <th>
          Stars
        </th>
        <th>
          Watchers
        </th>
        <th>
          Language
        </th>
      </tr>
    </thead>
    <tbody>
      {repos.map((item: Repo) =>
        <RepoElem
          key={item.id}
          repo={item}
          marked={!!markedRepos.find(({ id }) => id === item.id)}
          toggleMarkedRepo={toggleMarkedRepo} />
      )}
    </tbody>
    <tfoot>
      <tr>
        <td colSpan={6}>
          <div className="links">
            <button onClick={() => changePage(currentPage - 1)} disabled={currentPage < 2}>prev</button>
            page: {currentPage} / {pageCount}
            <button onClick={() => changePage(currentPage + 1)} disabled={currentPage >= pageCount}>next</button>
          </div>
        </td>
      </tr>
    </tfoot>
  </table>

  </>
}

export default RepoList;