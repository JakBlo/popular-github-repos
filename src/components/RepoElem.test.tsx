import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RepoElem from './RepoElem';


const setup = () => {
  const toggleMarkedRepo = jest.fn()
  render(<RepoElem
    repo={{
      id: 1,
      name: "repo name",
      stargazers_count: 1337,
      watchers_count: 2,
      language: "",
      html_url: "",
      description: "",
    }}
    marked={true}
    toggleMarkedRepo={toggleMarkedRepo}
  />);
  const elem = screen.getByTestId('repo-elem');
  const checkbox = screen.getByTestId('repo-elem-checkbox');
  return {
    elem,
    checkbox,
    toggleMarkedRepo,
  }
}

test('in document', () => {
  const { elem, checkbox } = setup()
  expect(elem).toBeInTheDocument();
  expect(checkbox).toBeInTheDocument();
});
test('displays contains repo name and star count', () => {
  const { elem } = setup()
  expect(elem).toHaveTextContent("repo name");
  expect(elem).toHaveTextContent("1337");
});
test('change of value triggers toggleMarkedRepo function', () => {
  const { checkbox, toggleMarkedRepo } = setup()
  fireEvent.click(checkbox, {})
  expect(toggleMarkedRepo).toHaveBeenCalled()
});
