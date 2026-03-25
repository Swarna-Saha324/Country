import { useState } from "react";
import "./country.css"
const Country = ({ country,handleVisitedCountries }) => {
    
        const [vis , setVis] = useState(false);

    const handleVisited = () => {
        const newState = !vis;   // toggle
        setVis(newState);

        // 🔥 IMPORTANT: send new state
        handleVisitedCountries(country, newState);
    };


   
    return (
        <div >
        <div className={`country ${vis && 'country-vis'}`}>
            <img 
                src={country.flags.flags.png} 
                alt={country.flags.flags.alt} 
                width="150"
            />

            <h3>Name: {country.name.common}</h3>

            <p>Capital: {country.capital.capital[0]}</p>

            <p>Region: {country.region.region}</p>

            <p>Population: {country.population.population}</p>
            <p>Area:{country.area.area} {country.area.area>30000 ? "Big Country":"Small country"}</p>
            <button onClick={handleVisited}>{vis ? "Visited" :"Not Visited"}</button>

        </div>
        </div>
    );
};
export default Country;