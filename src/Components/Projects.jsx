import calculator from '../images/calculator.jpg'
import weatherApp from '../images/weatherApp.jpg'
import reservation from '../images/download.png'
import CardProject from './CardProject';  // Make sure to import your CardProject component

export default function Projects() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-wrap justify-center">
        <div className="m-4">
          <CardProject 
            title="Check weather cities" 
            description="See weather details"
            image={weatherApp}
            link="https://davidkramer1999.github.io/weather-app/"
            used="React, JavaScript"
          />
        </div>
        <div className="m-4">
          <CardProject 
            title="Make your reservation today!" 
            description="Quick reservations"
            image={reservation}
            link="https://master--magnificent-blancmange-e54e6e.netlify.app/"
            used="React, JavaScript"

          />
        </div>
        <div className="m-4">
          <CardProject 
            title="So you don't need to do math" 
            description="A calculator app"
            image={calculator}
            link="https://dashing-daifuku-821922.netlify.app/"
            used="JavaScript"
          />
        </div>
      </div>
    </div>
  );
}
