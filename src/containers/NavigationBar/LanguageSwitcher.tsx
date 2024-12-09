import { useTranslation } from 'react-i18next'
import Nav from 'react-bootstrap/Nav'
import { useGetStoreListQueryStateResult } from '../../service/api/store'
import { handleDOMChange } from '../../service/lang'
import config from '../../config'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
    handleDOMChange(lang)
  }
  const { isLoading, isFetching } = useGetStoreListQueryStateResult()
  return (
    <>
      {config.languages.map((lang) => {
        return (
          <Nav.Link
            key={lang}
            className="text-uppercase"
            onClick={() => handleChangeLanguage(lang)}
            disabled={lang === i18n.language || isLoading || isFetching}
          >
            {lang.slice(0, 2)}
          </Nav.Link>
        )
      })}
    </>
  )
}

export default LanguageSwitcher
