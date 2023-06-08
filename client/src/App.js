import './App.css';
import { useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [memes, setMemes] = useState([]);


  useEffect(() => {
    axios.get('/memes').then(res => {
      setMemes(res.data);
    })
  }, [])


  return (
    <div className="App">
      <h1>Memes</h1>
      {memes.map(meme => <article key={meme.id}>
        <img src={meme.img}/>
      </article>)}
    </div>
  );
}

export default App;
