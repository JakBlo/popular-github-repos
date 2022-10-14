export type Repo = {
  id: number,
  name: string,
  stargazers_count: number,
  watchers_count: number,
  language: string,
  html_url: string,
  description: string,
}

export type APIResponse = {
  items: Repo[],
  total_count: number
}