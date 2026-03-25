import { use, useState } from "react";
import Country from "./country/Country";
import "./country/country.css";

export default function Countries({ fetchCountries }) {
    const countries = use(fetchCountries);
    const countriesData = countries.countries;

    const [visited, setVisited] = useState([]);
    // 1. Add Search State
    const [searchQuery, setSearchQuery] = useState("");

    const getId = (country) => country.ccn3?.ccn3;

    // 2. Filter the countries based on search
    const filteredCountries = countriesData.filter(country => 
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleVisitedCountries = (country, isVisited) => {
        const id = getId(country);
        if (isVisited) {
            const exists = visited.find(c => getId(c) === id);
            if (!exists) setVisited([...visited, country]);
        } else {
            const updated = visited.filter(c => getId(c) !== id);
            setVisited(updated);
        }
    };

    return (
        <div className="container">
            <h1>Explore Countries</h1>
            
            {/* 3. The Search Input */}
            <div className="search-box">
                <input 
                    type="text" 
                    placeholder="Search by country name..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <div className="visited-stats">
                <h3>Visited: {visited.length} | Results Found: {filteredCountries.length}</h3>
            </div>

            <div className="gri">
                {/* 4. Map over filteredCountries instead of countriesData */}
                {filteredCountries.map(country => (
                    <Country
                        key={getId(country) || country.name.common}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                    />
                ))}
            </div>
        </div>
    );
}