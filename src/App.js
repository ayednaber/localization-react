import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import i18n from './i18n';
import GlobeIcon from './GlobeIcon';
import i18next from 'i18next';
import cookies from 'js-cookie';

const languages = [
  {
    code: 'fr',
    name: 'Français',
    country_code: 'fr'
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb'
  },
  {
    code: 'ar',
    name: 'العربية',
    country_code: 'jo'
  }
]

function App() {
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find(l => l.code === currentLanguageCode)
  const { t } = useTranslation()

  const releaseDate = new Date('2021-03-07');
  const timeDifference = new Date() - releaseDate;
  const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return (
    <div className='container'>
      <div className='d-flex justify-content-end'>
      <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <GlobeIcon />
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <span className='dropdown-item-text'>{t('language')}</span>
          </li>
          {languages.map(({code, name, country_code}) => (
            <li key={country_code}>
            <button
              className="dropdown-item langitem"
              onClick={() => i18next.changeLanguage(code)}
              disabled={code === currentLanguageCode}  
            >
              <span 
                className={`fi fi-${country_code} mx-2`}
                style={{
                  opacity: currentLanguageCode === code ? 0.5 : 1,
                }}
              ></span>
              {name}
              </button>
            </li>
          ))}
      </ul>
</div>
    </div>
      <div className='d-flex flex-column align-items-start'>
        <h1 className='font-weight-normal mb-3'>{t('welcome_message')}</h1>
        <p>{t('days_since_release', {number_of_days})}</p>
      </div>
    </div>
  );
}

export default App;
