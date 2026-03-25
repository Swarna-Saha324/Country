import { Suspense } from 'react';
import './App.css';
import Countries from './Countries';

// fetch data
const fetchCountries = fetch("https://openapi.programming-hero.com/api/all")
  .then(res => res.json());

function App() {
  return (
    <>
      <h1>🌍 Countries App</h1>

      <Suspense fallback={<p>Loading countries...</p>}>
        <Countries fetchCountries={fetchCountries} />
      </Suspense>
    </>
  );
}

export default App;