
export default function Card({card,index}) {
    return(
        <div key={index} className='card' >
               <div className='top'>
          <h4>{card}</h4>
          <h4>{card}</h4>
          </div>
        <div className='bottom'>
        <h4>{card}</h4>
          <h4>{card}</h4>
        </div>
        </div>
      )
}