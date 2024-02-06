import './App.css';
export default function ClubCards({cards}) {
    return (
        <div className='cards'>
        {cards.map((card,index)=>{
          return(
            <div key={index} className='card' >
              {card}
            </div>
          )
        })}
        </div>
    )
}