import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LanguageSelect from './LanguageSelect';


const setup = () => {
  const setLanguage = jest.fn()
  render(<LanguageSelect language='testLang' setLanguage={setLanguage} />);
  const input = screen.getByTestId('lang-select');
  return {
    input,
    setLanguage
  }
}

test('in document and correct value', () => {
  const { input } = setup()
  expect(input).toBeInTheDocument();
  expect(input).toHaveValue('testLang');
});
test('change of value triggers setLanguage function', () => {
  const { input, setLanguage } = setup()
  fireEvent.change(input, { target: { value: 'newLang' } })
  expect(input).toHaveValue('newLang')
  expect(setLanguage).toHaveBeenCalled()
});
