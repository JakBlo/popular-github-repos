import React, { useState, useEffect } from 'react';
import './App.css';
import {
  getPopularRepos, saveMarkedRepos, loadMarkedRepos
} from './api/APIUtils';
import { Repo, APIResponse } from './types'
import RepoList from './components/RepoList'
import LanguageSelect from './components/LanguageSelect';

function getLastWeeksDate(): string {
  const now = new Date();

  return new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7)
    .toISOString().split('T')[0];
}

function App() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(0);
  const [language, setLanguage] = useState<string>('');
  const [markedRepos, setMarkedRepos] = useState<Repo[]>(loadMarkedRepos());
  const [displayMarked, setdisplayMarked] = useState<boolean>(false);
  const pageSize = 25;
  const startDate = getLastWeeksDate()
  useEffect(() => {
    async function fetchData() {
      const { items, total_count }: APIResponse = await getPopularRepos(startDate, page, pageSize, language);
      setRepos(items);
      setPageCount(Math.ceil(total_count / pageSize))
    }
    fetchData();

  }, [page, language, startDate])
  useEffect(() => {
    saveMarkedRepos(markedRepos);
  }, [markedRepos])
  const toggleMarkedRepo = (repo: Repo) => {
    setMarkedRepos(
      markedRepos.find(({ id }) => id === repo.id)
        ? markedRepos.filter(({ id }) => id !== repo.id)
        : [...markedRepos, repo]
    )

  }
  const toggleDisplayMarked = () => {
    setdisplayMarked(!displayMarked)
  }
  return (
    <div className="App">
      <LanguageSelect {...{ language, setLanguage }} />
      <button onClick={() => toggleDisplayMarked()}>toggle marked repos</button>
      <RepoList
        repos={displayMarked ? markedRepos : repos}
        changePage={setPage}
        currentPage={displayMarked ? 1 : page}
        pageCount={displayMarked ? 1 : pageCount}
        markedRepos={markedRepos}
        toggleMarkedRepo={toggleMarkedRepo} />
    </div>
  );
}

export default App;
