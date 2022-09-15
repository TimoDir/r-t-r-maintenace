import './App.css';
import * as React from 'react';
import { funnyCat } from './resources/funnycat';

const CatTmblr = ({value, order}) =>{
  const displayCat = value.map(cat =>{
    return (
      <div className="App-img" key={cat.key}>
        <img src={cat.url} />
        <h2>{cat.title}</h2>
        <p>{cat.rate}</p>
      </div>
    )
  });
  
  return (
    <div className='App-Tmblr'>
      {displayCat}
    </div>
  );
};

function App() {
  const [catList, setCatList] = React.useState(funnyCat)
  const [displayParameter, setDisplayParameter] = React.useState('none');


  return (
    <div className="App">
      <div className='Header'>
        <h1>FunnyCat</h1>
        <p>(^・x・^)</p>
        <form>
          <select>
            <option>none</option>
            <option>Alphabetic</option>
            <option>Rating</option>
          </select>
        </form>
      </div>
      <CatTmblr 
      value = {catList}
      order = {displayParameter}
      />
    </div>
  );
}

export default App;
