import {useState,useEffect} from 'react';
import './App.css';
import Cards from './Cards';
const initialValue={
  spade:['A','K','Q','J'],
  hearts:['A','K','Q','J'],
  diamond:['A','K','Q','J'],
  club:['A','K','Q','J']
}
function App() {
  const [cards,setCards]=useState(initialValue);

  useEffect(()=>{
    function generateCards() {
      const keys=Object.keys(initialValue);
      const obj={};
      for(let i=0;i<keys.length;++i) {
        const arr=initialValue[keys[i]];
        for(let i=2;i<=10;++i) {
          arr.push(i);
        }
        obj[keys[i]]=arr;
      }
      setCards(obj);
    }
    generateCards();

  },[])

  return (
    <div className='main_container'>
    <Cards 
      cards1={cards.spade} 
      cards2={cards.diamond} 
      cards3={cards.hearts} 
      cards4={cards.club}
    />
    </div>
  );
}

export default App;
