import axios from 'axios';
import {APIResponse, Repo} from '../types';

function buildSearchURL(startDate: string ,{
  sort = 'stars',
  order = 'desc',
  page = 1,
  language = '',
  pageSize = 30,
}) {
  return `https://api.github.com/search/repositories?q=created:%3E${startDate}${language ? `+language:${language}`: ''}&sort=${sort}&order=${order}&page=${page}&per_page=${pageSize}`
}

export const getPopularRepos = async (startDate: string, page: number = 1, pageSize: number = 30, language: string = ''): Promise<APIResponse> => {
  return await axios.get(buildSearchURL(startDate, { page, pageSize, language})).then(({data}) => data);
}

export const saveMarkedRepos = (repos: Repo[]) : void => {
  localStorage.setItem('markedRepos', JSON.stringify(repos));
}
export const loadMarkedRepos = () : Repo[] => {
  return JSON.parse(localStorage.getItem('markedRepos') || '[]');
}