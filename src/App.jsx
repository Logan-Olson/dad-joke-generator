import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [jokes, setJokes] = useState([]);
  const [selectedJoke, setSelectedJoke] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const randomPage = Math.floor(Math.random()*20)+1;
     axios.get(`https://icanhazdadjoke.com/search?limit=6&page=${randomPage}`,{
      headers: {Accept: 'application/json'}
    })
    .then(response =>{
      setJokes(response.data.results);
      setLoading(false);
    })
    .catch(error => {
      console.error(error);
      setError('Failed to load new jokes');
      setLoading(false);
    })
  }, []);

  const getNewJokes = () => {
    setLoading(true);
    const randomPage = Math.floor(Math.random()*20)+1;
     axios.get(`https://icanhazdadjoke.com/search?limit=6&page=${randomPage}`,{
      headers: {Accept: 'application/json'}
    })
    .then(response =>{
      setJokes(response.data.results);
      setLoading(false);
    })
    .catch(error => {
      console.error(error);
      setError('Failed to load new jokes');
      setLoading(false);
    });
  };

  return (
    <div className = "App">
      <h1>Joke Generator</h1>
      <button onClick={getNewJokes}>Get A New List Of Jokes</button>
      {loading && <p>Loading...</p>}
      {error && <p className = "error">{error}</p>}
      {!loading && jokes.length == 0 && <p>No Jokes D:</p>}
      <div className = "joke-list">
        {jokes.map((joke => (
          <div key = {joke.id} className = "joke-card" onClick={() => setSelectedJoke(joke)}>
            <p>{joke.joke}</p>
            </div>
        )))}
        </div>

        {selectedJoke && (
          <div className="modal" onClick={() => setSelectedJoke(null)}>
          <div className="modal-content">
          <h2>Selected Joke</h2>
          <p>{selectedJoke.joke}</p>
          <button onClick={() => setSelectedJoke(null)}>Close</button>
          </div>
          </div>
        )}
      </div>
      )
  }

export default App;


