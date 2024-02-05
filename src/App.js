import {useState,useRef} from 'react';
import './App.css';

function App() {
  const [inputVal,setInputVal]=useState('');
  const [id,setId]=useState(1);
  const [data,setData]=useState([{id:null,value:''}]);
  const [dataCopy,setDataCopy]=useState([{id:null,value:''}]);
  const inputRef=useRef();
  function handleChange(e) {
    if(e.target.value==='') {
      setData(dataCopy);
    }
    setInputVal(e.target.value);
  }
  function handleClick() {
    setData((prev)=>{
      return [...prev,{id:id,value:inputVal}]
    });
    setDataCopy((prev)=>{
      return [...prev,{id:id,value:inputVal}]
    })
    setId(prev=>prev+1);
    setInputVal('')
  }
  function handleSearch(e) {
    const typedValue=inputRef.current.value;
    setData(data.filter((d)=>{
      return d.value.toLocaleLowerCase().includes(typedValue);
    }))

  }

  function handleDelete(id) {
    setData(data.filter((d)=>{
      return d.id!==id;
    }));
    setDataCopy(data.filter((d)=>{
      return d.id!==id;
    }));
  }
  return (
    <div className='main_container'>
        <div className='input_container'>
          <input type='text' value={inputVal} onChange={handleChange} ref={inputRef}/>
          <button onClick={handleClick}>Add</button>
          <button onClick={handleSearch}>Search</button>
        </div>
        {data
        .map((d)=>{
          return (
            <div key={d.id} className='container'>
              <h2>{d.value}</h2>
              {d.value && <div className='btn'><button onClick={()=>handleDelete(d.id)}>Delete</button></div>}
            </div>
          )
        })}
    </div>
  );
}

export default App;
