import calculator from '../images/calculator.jpg'
import weatherApp from '../images/weatherApp.jpg'
import reservation from '../images/download.png'
import CardProject from './CardProject';  
import { useTranslation } from 'react-i18next';

export default function Projects() {
       const { t} = useTranslation();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-wrap justify-center">
        <div className="m-4">
          <CardProject 
            title={t('weather')} 
            description={t('weatherDescription')} 
            image={weatherApp}
            link="https://davidkramer1999.github.io/weather-app/"
            used="React, JavaScript"
          />
        </div>
        <div className="m-4">
          <CardProject 
            title={t('reservation')} 
            description={t('reservationDescription')}
            image={reservation}
            link="https://master--magnificent-blancmange-e54e6e.netlify.app/"
            used="React, JavaScript"

          />
        </div>
        <div className="m-4">
          <CardProject 
            title={t('calculator')} 
            description= {t('calculatorDescription')}
            image={calculator}
            link="https://dashing-daifuku-821922.netlify.app/"
            used="JavaScript"
          />
        </div>
      </div>
    </div>
  );
}
