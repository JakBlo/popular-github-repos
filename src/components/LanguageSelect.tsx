type LanguageSelectProps = {
  language: string
  setLanguage: (language: string) => void
}

function LanguageSelect({ language, setLanguage }: LanguageSelectProps): JSX.Element {
  return <div>
    filter language:
    <input
      data-testid="lang-select"
      type='text' defaultValue={language}
      onChange={(event) => setLanguage(event.target.value)}
      placeholder='language...' />
  </div>
}
export default LanguageSelect;