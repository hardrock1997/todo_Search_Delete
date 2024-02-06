import './App.css';
import Card from './Card';
export default function Cards({cards1,cards2,cards3,cards4}) {
    return (
        <div className='cards'>
        {cards1.map((card,index)=>{
          return(
            <Card card={card} index={index}/>
          )
        })}
         {cards2.map((card,index)=>{
          return(
            <Card card={card} index={index}/>
          )
        })}
         {cards3.map((card,index)=>{
          return(
            <Card card={card} index={index}/>
          )
        })}
         {cards4.map((card,index)=>{
          return(
            <Card card={card} index={index}/>
          )
        })}
        </div>
    )
}